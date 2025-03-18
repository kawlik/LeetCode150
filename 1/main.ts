import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function twoSum(nums: number[], target: number): number[] {
	const numsMap = new Map<number, number>();

	for (const [index, value] of nums.entries()) {
		const complement = target - value;

		if (numsMap.has(complement)) {
			return [numsMap.get(complement)!, index];
		} else {
			numsMap.set(value, index);
		}
	}

	return [];
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
