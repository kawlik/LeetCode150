import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function twoSum(nums: number[], target: number): number[] {
	const sorted = [...nums].sort((p, q) => p - q);

	let p = 0;
	let q = nums.length - 1;

	while (p < q) {
		const sum = sorted[p] + sorted[q];

		if (sum < target) p++;
		if (sum > target) q--;

		if (sum === target) break;
	}

	let i = 0;
	let j = nums.length - 1;

	while (nums[i] !== sorted[p]) i++;
	while (nums[j] !== sorted[q]) j--;

	return [i, j];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
});

Deno.test("Case 2", () => {
	assertEquals(twoSum([3, 2, 4], 6), [1, 2]);
});

Deno.test("Case 3", () => {
	assertEquals(twoSum([3, 3], 6), [0, 1]);
});
