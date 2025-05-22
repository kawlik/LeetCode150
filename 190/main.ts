import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function reverseBits(n: number): number {
	let ans = 0b0;

	for (let i = 0; i < 32; i++) {
		ans |= (n & 1) << (31 - i);
		n >>= 1;
	}

	return ans >>> 0;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(
		reverseBits(0b00000010100101000001111010011100),
		0b00111001011110000010100101000000,
	);
});

Deno.test("Case 2", () => {
	assertEquals(
		reverseBits(0b11111111111111111111111111111101),
		0b10111111111111111111111111111111,
	);
});
