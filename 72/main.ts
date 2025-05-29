import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function minDistance(word1: string, word2: string): number {
	const M = word1.length;
	const N = word2.length;

	const dp = Array.from({ length: M + 1 }, () => new Array<number>(N + 1));

	for (let i = 0; i <= M; i++) dp[i][0] = i;
	for (let i = 0; i <= N; i++) dp[0][i] = i;

	for (let m = 1; m <= M; m++) {
		for (let n = 1; n <= N; n++) {
			if (word1[m - 1] === word2[n - 1]) {
				dp[m][n] = dp[m - 1][n - 1];
			} else {
				const op_1 = dp[m - 1][n - 1];
				const op_2 = dp[m - 1][n];
				const op_3 = dp[m][n - 1];

				dp[m][n] = 1 + Math.min(op_1, op_2, op_3);
			}
		}
	}

	return dp[M][N];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(minDistance("horse", "ros"), 3);
});

Deno.test("Case 2", () => {
	assertEquals(minDistance("intention", "execution"), 5);
});
