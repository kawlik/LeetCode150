import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxSubarraySumCircular(nums: number[]): number {
	let curMax = 0;
	let curMin = 0;
	let maxSum = nums[0];
	let minSum = nums[0];
	let sum = 0;

	for (const num of nums) {
		sum += num;

		curMax = Math.max(curMax + num, num);
		curMin = Math.min(curMin + num, num);

		maxSum = Math.max(curMax, maxSum);
		minSum = Math.min(curMin, minSum);
	}

	if (minSum === sum) {
		return maxSum;
	} else {
		return Math.max(maxSum, sum - minSum);
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(maxSubarraySumCircular([1, -2, 3, -2]), 3);
});

Deno.test("Case 2", () => {
	assertEquals(maxSubarraySumCircular([5, -3, 5]), 10);
});

Deno.test("Case 3", () => {
	assertEquals(maxSubarraySumCircular([-3, -2, -3]), -2);
});
