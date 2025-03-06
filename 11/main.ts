import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxArea(height: number[]): number {
	let maxArea = 0;

	let p = 0;
	let q = height.length - 1;

	while (p < q) {
		const w = q - p;
		const h = Math.min(height[p], height[q]);
		maxArea = Math.max(maxArea, h * w);

		if (height[p] < height[q]) {
			p++;
		} else {
			q--;
		}
	}

	return maxArea;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
});

Deno.test("Case 2", () => {
	assertEquals(maxArea([1, 1]), 1);
});
