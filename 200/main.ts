import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function numIslands(grid: string[][]): number {
	const M = grid.length;
	const N = grid[0].length;

	const dfs = (m: number, n: number): void => {
		if (m < 0 || m >= M) return;
		if (n < 0 || n >= N) return;
		if (grid[m][n] !== "1") return;

		grid[m][n] = "0";

		dfs(m - 1, n);
		dfs(m + 1, n);
		dfs(m, n + 1);
		dfs(m, n - 1);
	};

	let numIslands = 0;

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (grid[m][n] === "1") {
				numIslands++;

				dfs(m, n);
			}
		}
	}

	return numIslands;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(
		numIslands([
			["1", "1", "1", "1", "0"],
			["1", "1", "0", "1", "0"],
			["1", "1", "0", "0", "0"],
			["0", "0", "0", "0", "0"],
		]),
		1,
	);
});

Deno.test("Case 2", () => {
	assertEquals(
		numIslands([
			["1", "1", "0", "0", "0"],
			["1", "1", "0", "0", "0"],
			["0", "0", "1", "0", "0"],
			["0", "0", "0", "1", "1"],
		]),
		3,
	);
});
