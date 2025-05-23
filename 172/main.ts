import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function trailingZeroes(n: number): number {
	let z = 0;

	while (n > 0) {
		n = Math.floor(n / 5);
		z += n;
	}

	return z;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(trailingZeroes(3), 0);
});

Deno.test("Case 2", () => {
	assertEquals(trailingZeroes(5), 1);
});

Deno.test("Case 3", () => {
	assertEquals(trailingZeroes(0), 0);
});
