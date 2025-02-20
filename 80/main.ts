import { assertArrayIncludes, assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function removeDuplicates(nums: number[]): number {
	let numValid = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[i + 2]) nums[numValid++] = nums[i];
	}

	return numValid;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const nums = [1, 1, 1, 2, 2, 3];

	assertEquals(removeDuplicates(nums), 5);
	assertArrayIncludes(nums.slice(0, 5), [1, 1, 2, 2, 3]);
});

Deno.test("Case 2", () => {
	const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

	assertEquals(removeDuplicates(nums), 7);
	assertArrayIncludes(nums.slice(0, 7), [0, 0, 1, 1, 2, 3, 3]);
});
