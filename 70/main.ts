import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function climbStairs(n: number): number {
	const dp = new Array<number>(n + 1);

	dp[0] = 1;
	dp[1] = 1;

	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(climbStairs(2), 2);
});

Deno.test("Case 2", () => {
	assertEquals(climbStairs(3), 3);
});
