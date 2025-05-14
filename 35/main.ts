import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function searchInsert(nums: number[], target: number): number {
	const search = (p: number, q: number): number => {
		if (q < p) return p;

		const o = (p + q) >> 1;

		if (nums[o] > target) return search(p, o - 1);
		if (nums[o] < target) return search(o + 1, q);

		return o;
	};

	return search(0, nums.length - 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(searchInsert([1, 3, 5, 6], 5), 2);
});

Deno.test("Case 2", () => {
	assertEquals(searchInsert([1, 3, 5, 6], 2), 1);
});

Deno.test("Case 3", () => {
	assertEquals(searchInsert([1, 3, 5, 6], 7), 4);
});

Deno.test("Case 4", () => {
	assertEquals(searchInsert([1, 3, 5, 6], 0), 0);
});
