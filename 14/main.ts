import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function longestCommonPrefix(strs: string[]): string {
	let prefix = strs[0];

	for (let i = 1; i < strs.length; i++) {
		const testStr = strs[i];

		while (prefix.length && !testStr.startsWith(prefix)) {
			prefix = prefix.slice(0, prefix.length - 1);
		}
	}

	return prefix;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
});

Deno.test("Case 2", () => {
	assertEquals(longestCommonPrefix(["dog", "racecar", "car"]), "");
});

Deno.test("Case 3", () => {
	assertEquals(longestCommonPrefix(["ab", "a"]), "a");
});
