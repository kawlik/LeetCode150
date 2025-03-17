import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function groupAnagrams(strs: string[]): string[][] {
	const anagrams = new Map<string, string[]>();

	for (const str of strs) {
		const base = [...str].sort().join("");

		if (anagrams.has(base)) {
			anagrams.get(base)?.push(str);
		} else {
			anagrams.set(base, [str]);
		}
	}

	return [...anagrams.values()];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
	const anagrams = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

	assertEquals(groupAnagrams(strings).flat().sort(), anagrams.flat().sort());
});

Deno.test("Case 2", () => {
	const strings = [""];
	const anagrams = [[""]];

	assertEquals(groupAnagrams(strings).flat().sort(), anagrams.flat().sort());
});

Deno.test("Case 3", () => {
	const strings = ["a"];
	const anagrams = [["a"]];

	assertEquals(groupAnagrams(strings).flat().sort(), anagrams.flat().sort());
});
