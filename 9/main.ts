import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isPalindrome(x: number): boolean {
	const s = x.toString();

	for (let i = 0; i < s.length >> 1; i++) {
		if (s.at(i) !== s.at(-i - 1)) return false;
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(isPalindrome(121), true);
});

Deno.test("Case 2", () => {
	assertEquals(isPalindrome(-121), false);
});

Deno.test("Case 3", () => {
	assertEquals(isPalindrome(10), false);
});
