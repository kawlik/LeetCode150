import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function hammingWeight(n: number): number {
	let hammingWeight = 0;

	for (let i = 0; i <= 31; i++) {
		if (n & (1 << i)) hammingWeight++;
	}

	return hammingWeight;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(hammingWeight(11), 3);
});

Deno.test("Case 2", () => {
	assertEquals(hammingWeight(128), 1);
});

Deno.test("Case 3", () => {
	assertEquals(hammingWeight(2147483645), 30);
});
