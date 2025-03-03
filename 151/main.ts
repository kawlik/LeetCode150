import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function reverseWords(s: string): string {
	return s.trim().split(/\ +/).reverse().join(" ");
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(reverseWords("the sky is blue"), "blue is sky the");
});

Deno.test("Case 2", () => {
	assertEquals(reverseWords("  hello world  "), "world hello");
});

Deno.test("Case 3", () => {
	assertEquals(reverseWords("a good   example"), "example good a");
});
