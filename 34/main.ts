import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function searchRange(nums: number[], target: number): number[] {
	let p = 0;
	let d = nums.length - 1;

	while (p < d) {
		const o = (p + d) >> 1;

		if (nums[o] < target) {
			p = o + 1;
		} else {
			d = o;
		}
	}

	let b = 0;
	let q = nums.length - 1;

	while (b < q) {
		const o = ((b + q) >> 1) + 1;

		if (nums[o] > target) {
			q = o - 1;
		} else {
			b = o;
		}
	}

	if (nums[p] !== target) return [-1, -1];
	if (nums[q] !== target) return [-1, -1];

	return [p, q];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4]);
});

Deno.test("Case 2", () => {
	assertEquals(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]);
});

Deno.test("Case 3", () => {
	assertEquals(searchRange([], 0), [-1, -1]);
});
