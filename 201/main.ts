import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function rangeBitwiseAnd(left: number, right: number): number {
	let shift = 0;

	while (left < right) {
		left >>= 1;
		right >>= 1;
		shift++;
	}

	return left << shift;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(rangeBitwiseAnd(5, 7), 4);
});

Deno.test("Case 2", () => {
	assertEquals(rangeBitwiseAnd(0, 0), 0);
});

Deno.test("Case 3", () => {
	assertEquals(rangeBitwiseAnd(1, 2147483647), 0);
});
