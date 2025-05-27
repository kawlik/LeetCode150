import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
	const M = obstacleGrid.length;
	const N = obstacleGrid[0].length;

	if (obstacleGrid[0][0]) return 0;

	const path = obstacleGrid.map((row) => row.map(() => 0));
	path[0][0] = 1;

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (obstacleGrid[m][n]) continue;

			if (m > 0) path[m][n] += path[m - 1][n];
			if (n > 0) path[m][n] += path[m][n - 1];
		}
	}

	return path[M - 1][N - 1];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]), 2);
});

Deno.test("Case 2", () => {
	assertEquals(uniquePathsWithObstacles([[0, 1], [0, 0]]), 1);
});

Deno.test("Case 3", () => {
	assertEquals(uniquePathsWithObstacles([[0, 0]]), 1);
});
