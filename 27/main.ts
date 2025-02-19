import { assertArrayIncludes, assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function removeElement(nums: number[], val: number): number {
	let numGoodElements = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) nums[numGoodElements++] = nums[i];
	}

	return numGoodElements;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const nums = [3, 2, 2, 3];
	const val = 3;

	assertEquals(removeElement(nums, val), 2);
	assertArrayIncludes(nums.slice(0, 2), [2, 2]);
});

Deno.test("Case 2", () => {
	const nums = [0, 1, 2, 2, 3, 0, 4, 2];
	const val = 2;

	assertEquals(removeElement(nums, val), 5);
	assertArrayIncludes(nums.slice(0, 5), [0, 1, 4, 0, 3]);
});
