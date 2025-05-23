import { assertAlmostEquals, assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function myPow(x: number, n: number): number {
	if (x === 1) return 1;
	if (n === 0) return 1;

	let base = x;
	let exp = Math.abs(n);
	let res = 1;

	while (exp > 0) {
		if (exp & 1) res *= base;

		base *= base;
		exp = Math.floor(exp / 2);
	}

	return n < 0 ? 1 / res : res;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertAlmostEquals(myPow(2.00000, 10), 1024.00000, 1e-5);
});

Deno.test("Case 2", () => {
	assertAlmostEquals(myPow(2.10000, 3), 9.26100, 1e-5);
});

Deno.test("Case 3", () => {
	assertAlmostEquals(myPow(2.00000, -2), 0.25000, 1e-5);
});
