import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function minPathSum(grid: number[][]): number {
	const M = grid.length;
	const N = grid[0].length;

	const path = grid.map((row) => row.map(() => Infinity));
	path[0][0] = grid[0][0];

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (m > 0) path[m][n] = Math.min(path[m][n], grid[m][n] + path[m - 1][n]);
			if (n > 0) path[m][n] = Math.min(path[m][n], grid[m][n] + path[m][n - 1]);
		}
	}

	return path[M - 1][N - 1];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]), 7);
});

Deno.test("Case 2", () => {
	assertEquals(minPathSum([[1, 2, 3], [4, 5, 6]]), 12);
});
