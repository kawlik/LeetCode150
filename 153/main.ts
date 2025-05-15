import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function findMin(nums: number[]): number {
	const isRotated = (p: number, q: number): boolean => {
		return nums[p] > nums[q];
	};

	let p = 0;
	let q = nums.length - 1;

	if (!isRotated(p, q)) return nums[0];

	while (p < q - 1) {
		const o = (p + q) >> 1;

		if (isRotated(p, o)) {
			q = o;
		} else {
			p = o;
		}
	}

	return nums[q];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(findMin([3, 4, 5, 1, 2]), 1);
});

Deno.test("Case 2", () => {
	assertEquals(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
});

Deno.test("Case 3", () => {
	assertEquals(findMin([11, 13, 15, 17]), 11);
});
