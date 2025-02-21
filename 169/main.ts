import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function majorityElement(nums: number[]): number {
	const frequencyMap: { [num: number]: number } = {};

	for (const num of nums) {
		if (frequencyMap[num]) {
			frequencyMap[num]++;
		} else {
			frequencyMap[num] = 1;
		}

		if (frequencyMap[num] > nums.length >> 1) return num;
	}

	return Number.NaN;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(majorityElement([3, 2, 3]), 3);
});

Deno.test("Case 2", () => {
	assertEquals(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
});
