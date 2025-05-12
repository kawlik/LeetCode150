import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxSubArray(nums: number[]): number {
	let maxSum = nums[0];
	let curSum = 0;

	for (const num of nums) {
		curSum = Math.max(curSum + num, num);
		maxSum = Math.max(curSum, maxSum);
	}

	return maxSum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});

Deno.test("Case 2", () => {
	assertEquals(maxSubArray([1]), 1);
});

Deno.test("Case 3", () => {
	assertEquals(maxSubArray([5, 4, -1, 7, 8]), 23);
});
