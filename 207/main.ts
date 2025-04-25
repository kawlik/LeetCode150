import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
	const enum State {
		UNVISITED = 0,
		VISITING = 1,
		VISITED = 2,
	}

	const graph: number[][] = Array.from({ length: numCourses }, () => []);
	const state: number[] = Array.from({ length: numCourses }, () => State.UNVISITED);

	for (const [a, b] of prerequisites) graph[a].push(b);

	const hasCycles = (course: number): boolean => {
		if (state[course] === State.VISITING) return true;
		if (state[course] === State.VISITED) return false;

		state[course] = State.VISITING;

		for (const prerequisite of graph[course]) {
			if (hasCycles(prerequisite)) return true;
		}

		state[course] = State.VISITED;

		return false;
	};

	for (let i = 0; i < numCourses; i++) {
		if (state[i] === State.UNVISITED && hasCycles(i)) return false;
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(canFinish(2, [[1, 0]]), true);
});

Deno.test("Case 2", () => {
	assertEquals(canFinish(2, [[1, 0], [0, 1]]), false);
});

Deno.test("Case 3", () => {
	assertEquals(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]]), true);
});
