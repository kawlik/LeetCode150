import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function plusOne(digits: number[]): number[] {
	digits[digits.length - 1]++;

	for (let i = digits.length - 1; i > 0; i--) {
		const j = i - 1;

		if (digits[i] >= 10) {
			digits[i] %= 10;
			digits[j] += 1;
		} else {
			return digits;
		}
	}

	if (digits[0] >= 10) {
		digits[0] %= 10;
		digits.unshift(1);
	}

	return digits;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(plusOne([1, 2, 3]), [1, 2, 4]);
});

Deno.test("Case 2", () => {
	assertEquals(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
});

Deno.test("Case 3", () => {
	assertEquals(plusOne([9]), [1, 0]);
});
