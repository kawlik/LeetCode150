import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function jump(nums: number[]): number {
	let countJumps = 0;
	let currentEnd = 0;
	let currentMax = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		currentMax = Math.max(currentMax, i + nums[i]);

		if (currentEnd === i) {
			currentEnd = currentMax;
			countJumps++;
		}
	}

	return countJumps;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(jump([2, 3, 1, 1, 4]), 2);
});

Deno.test("Case 2", () => {
	assertEquals(jump([2, 3, 0, 1, 4]), 2);
});
