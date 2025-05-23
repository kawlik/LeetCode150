import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function mySqrt(x: number): number {
	let min = 0;
	let max = x;

	while (min < max) {
		const mid = (min + max) >> 1;

		if (mid * mid < x) {
			min = mid + 1;
		} else {
			max = mid;
		}
	}

	if (min * min > x) min--;

	return min;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(mySqrt(4), 2);
});

Deno.test("Case 2", () => {
	assertEquals(mySqrt(8), 2);
});
