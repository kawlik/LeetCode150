import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function strStr(haystack: string, needle: string): number {
	return haystack.indexOf(needle);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(strStr("sadbutsad", "sad"), 0);
});

Deno.test("Case 2", () => {
	assertEquals(strStr("leetcode", "leeto"), -1);
});
