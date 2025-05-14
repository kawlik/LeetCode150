import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function search(nums: number[], target: number): number {
	const isRotated = (p: number, q: number): boolean => {
		return (nums[p] > nums[q]);
	};

	const findPivot = (p: number, q: number): number => {
		if (q - p === 1) return q;

		const o = (p + q) >> 1;

		if (isRotated(p, o)) return findPivot(p, o);
		if (isRotated(o, q)) return findPivot(o, q);

		return nums.length;
	};

	const findValue = (p: number, q: number): number => {
		if (q <= p) return p;

		const o = (p + q) >> 1;

		if (nums[o] > target) return findValue(p, o - 1);
		if (nums[o] < target) return findValue(o + 1, q);

		return o;
	};

	const p = 0;
	const q = nums.length - 1;
	const o = findPivot(0, q);

	const idx_p = findValue(p, o);
	const idx_q = findValue(o, q);

	if (nums[idx_p] === target) return idx_p;
	if (nums[idx_q] === target) return idx_q;

	return -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
});

Deno.test("Case 2", () => {
	assertEquals(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
});

Deno.test("Case 3", () => {
	assertEquals(search([1], 0), -1);
});
