import { assertArrayIncludes, assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function removeDuplicates(nums: number[]): number {
	let numUnique = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) nums[numUnique++] = nums[i];
	}

	return numUnique;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const nums = [1, 1, 2];

	assertEquals(removeDuplicates(nums), 2);
	assertArrayIncludes(nums.slice(0, 2), [1, 2]);
});

Deno.test("Case 2", () => {
	const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

	assertEquals(removeDuplicates(nums), 5);
	assertArrayIncludes(nums.slice(0, 5), [0, 1, 2, 3, 4]);
});
