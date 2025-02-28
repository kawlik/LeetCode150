import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function trap(height: number[]): number {
	let p = 0;
	let q = 0;

	let maxHeight = 0;
	let trapWater = 0;

	while (p < height.length) {
		maxHeight = 0;
		q++;

		while (height[q] < height[p]) {
			maxHeight = Math.max(maxHeight, height[q]);
			q++;
		}

		// reset
		if (q === height.length) {
			q = p + 1;
			height[p] = maxHeight;
		}

		while (height[q] < maxHeight) q++;

		const baseHeight = height[p];

		while (p < q) {
			trapWater += baseHeight - height[p];
			p++;
		}
	}

	return trapWater;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
});

Deno.test("Case 2", () => {
	assertEquals(trap([4, 2, 0, 3, 2, 5]), 9);
});
