import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function lengthOfLIS(nums: number[]): number {
	const memo = new Array<number>(nums.length);

	for (let i = 0; i < nums.length; i++) {
		memo[i] = 1;

		for (let j = 0; j <= i; j++) {
			if (nums[i] > nums[j]) {
				memo[i] = Math.max(memo[i], memo[j] + 1);
			}
		}
	}

	return Math.max(...memo);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
});

Deno.test("Case 2", () => {
	assertEquals(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4);
});

Deno.test("Case 3", () => {
	assertEquals(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1);
});

Deno.test("Case 4", () => {
	assertEquals(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]), 6);
});
