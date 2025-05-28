import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isInterleave(s1: string, s2: string, s3: string): boolean {
	if (s1.length + s2.length !== s3.length) return false;

	const dp = new Array<boolean[]>(s1.length + 1);

	for (let i = 0; i <= s1.length; i++) {
		dp[i] = new Array(s2.length + 1).fill(false);
	}

	for (let i = 0; i <= s1.length; i++) {
		for (let j = 0; j <= s2.length; j++) {
			if (i === 0 && j === 0) dp[i][j] = true;

			if (j > 0) dp[i][j] = (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) || dp[i][j];
			if (i > 0) dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || dp[i][j];
		}
	}

	return dp[s1.length][s2.length];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(isInterleave("aabcc", "dbbca", "aadbbcbcac"), true);
});

Deno.test("Case 2", () => {
	assertEquals(isInterleave("aabcc", "dbbca", "aadbbbaccc"), false);
});

Deno.test("Case 3", () => {
	assertEquals(isInterleave("", "", ""), true);
});
