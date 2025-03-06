import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function threeSum(nums: number[]): number[][] {
	nums.sort((p, q) => p - q);

	const threeSums = new Array<[i: number, j: number, k: number]>();
	const targetSum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;

		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			const threeSum = nums[i] + nums[j] + nums[k];

			if (threeSum === targetSum) {
				threeSums.push([nums[i], nums[j], nums[k]]);

				j++;
				k--;

				while (j < k && nums[j] === nums[j - 1]) j++;
				while (j < k && nums[k] === nums[k + 1]) k--;
			} else {
				if (threeSum < targetSum) j++;
				if (threeSum > targetSum) k--;
			}
		}
	}

	return threeSums;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
});

Deno.test("Case 2", () => {
	assertEquals(threeSum([0, 1, 1]), []);
});

Deno.test("Case 2", () => {
	assertEquals(threeSum([0, 0, 0]), [[0, 0, 0]]);
});
