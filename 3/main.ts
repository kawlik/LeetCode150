import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function lengthOfLongestSubstring(s: string): number {
	const charSet = new Set<string>();

	let p = 0;
	let q = 0;

	let max = 0;

	while (q < s.length) {
		while (p < s.length && charSet.has(s[q])) charSet.delete(s[p++]);
		while (q < s.length && !charSet.has(s[q])) charSet.add(s[q++]);

		max = Math.max(max, q - p);
	}

	return max;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(lengthOfLongestSubstring("abcabcbb"), 3);
});

Deno.test("Case 2", () => {
	assertEquals(lengthOfLongestSubstring("bbbbb"), 1);
});

Deno.test("Case 3", () => {
	assertEquals(lengthOfLongestSubstring("pwwkew"), 3);
});

Deno.test("Case 4", () => {
	assertEquals(lengthOfLongestSubstring(" "), 1);
});

console.log(lengthOfLongestSubstring(" "));
