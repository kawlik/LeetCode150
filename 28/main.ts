import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function strStr(haystack: string, needle: string): number {
	for (let i = 0; i <= haystack.length - needle.length; i++) {
		if (haystack.substring(i, i + needle.length) === needle) return i;
	}

	return -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(strStr("sadbutsad", "sad"), 0);
});

Deno.test("Case 2", () => {
	assertEquals(strStr("leetcode", "leeto"), -1);
});

Deno.test("Case 3", () => {
	assertEquals(strStr("sodbutsad", "sad"), 6);
});
