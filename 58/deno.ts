import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function lengthOfLastWord(s: string): number {
	return s.trim().split(" ").at(-1)!.length;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(lengthOfLastWord("Hello World"), 5);
});

Deno.test("Case 2", () => {
	assertEquals(lengthOfLastWord("   fly me   to   the moon  "), 4);
});

Deno.test("Case 3", () => {
	assertEquals(lengthOfLastWord("luffy is still joyboy"), 6);
});
