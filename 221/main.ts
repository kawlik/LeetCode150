import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maximalSquare(matrix: string[][]): number {
	const M = matrix.length;
	const N = matrix[0].length;

	const dp: number[][] = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));
	let maxSize: number = 0;

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (matrix[m][n] === "0") continue;

			const size_1 = dp[m][n];
			const size_2 = dp[m + 1][n];
			const size_3 = dp[m][n + 1];

			dp[m + 1][n + 1] = Math.min(size_1, size_2, size_3) + 1;
			maxSize = Math.max(maxSize, dp[m + 1][n + 1]);
		}
	}

	return maxSize ** 2;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(
		maximalSquare([
			["1", "0", "1", "0", "0"],
			["1", "0", "1", "1", "1"],
			["1", "1", "1", "1", "1"],
			["1", "0", "0", "1", "0"],
		]),
		4,
	);
});

Deno.test("Case 2", () => {
	assertEquals(maximalSquare([["0", "1"], ["1", "0"]]), 1);
});

Deno.test("Case 3", () => {
	assertEquals(maximalSquare([["0"]]), 0);
});
