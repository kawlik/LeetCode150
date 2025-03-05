import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isSubsequence(s: string, t: string): boolean {
	let i = 0;
	let j = 0;

	while (i < t.length) if (s.at(j) === t.at(i++)) j++;

	return j === s.length;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(isSubsequence("abc", "ahbgdc"), true);
});

Deno.test("Case 2", () => {
	assertEquals(isSubsequence("axc", "ahbgdc"), false);
});
