import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
	const graph: { [u: string]: { [v: string]: number } } = {};

	// step 1 - build graph
	for (let i = 0; i < equations.length; i++) {
		const [u, v] = equations[i];

		if (!graph[u]) graph[u] = {};
		if (!graph[v]) graph[v] = {};

		graph[u][v] = values[i];
		graph[v][u] = values[i] ** -1;
	}

	// step 2 - define eval func
	const dfs = (u: string, v: string, visited: Set<string>): number => {
		if (!graph[u]) return -1;
		if (!graph[v]) return -1;
		if (u === v) return 1;

		visited.add(u);

		for (const _u in graph[u]) {
			if (visited.has(_u)) continue;

			const result = dfs(_u, v, visited);

			if (result !== -1) return graph[u][_u] * result;
		}

		return -1;
	};

	// step 3 - eval queries
	return queries.map(([u, v]) => dfs(u, v, new Set()));
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const equations = [["a", "b"], ["b", "c"]];
	const values = [2.0, 3.0];
	const queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];
	const output = [6.00000, 0.50000, -1.00000, 1.00000, -1.00000];

	assertEquals(calcEquation(equations, values, queries), output);
});

Deno.test("Case 2", () => {
	const equations = [["a", "b"], ["b", "c"], ["bc", "cd"]];
	const values = [1.5, 2.5, 5.0];
	const queries = [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]];
	const output = [3.75000, 0.40000, 5.00000, 0.20000];

	assertEquals(calcEquation(equations, values, queries), output);
});

Deno.test("Case 3", () => {
	const equations = [["a", "b"]];
	const values = [0.5];
	const queries = [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]];
	const output = [0.50000, 2.00000, -1.00000, -1.00000];

	assertEquals(calcEquation(equations, values, queries), output);
});
