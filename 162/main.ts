import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function findPeakElement(nums: number[]): number {
	const search = (p: number, q: number): number => {
		if (q <= p) return p;

		const o = (p + q) >> 1;

		if (nums[o] > nums[o + 1]) {
			return search(p, o);
		} else {
			return search(o + 1, q);
		}
	};

	return search(0, nums.length - 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(findPeakElement([1, 2, 3, 1]), 2);
});

Deno.test("Case 2", () => {
	assertEquals(findPeakElement([1, 2, 1, 3, 5, 6, 4]), 5);
});
