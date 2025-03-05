import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isPalindrome(s: string): boolean {
	s = s.toLowerCase();
	s = s.replaceAll(/[^a-z0-9]/g, "");

	for (let i = 0; i < s.length; i++) {
		if (s.at(i) !== s.at(s.length - i - 1)) return false;
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(isPalindrome("A man, a plan, a canal: Panama"), true);
});

Deno.test("Case 2", () => {
	assertEquals(isPalindrome("race a car"), false);
});

Deno.test("Case 3", () => {
	assertEquals(isPalindrome(" "), true);
});
