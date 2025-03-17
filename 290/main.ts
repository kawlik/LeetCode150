import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function wordPattern(pattern: string, s: string): boolean {
	const charMap = new Map<string, string>();
	const wordMap = new Map<string, string>();

	const chars = pattern.split("");
	const words = s.split(" ");

	if (chars.length !== words.length) return false;

	for (let i = 0; i < chars.length; i++) {
		const char = chars.at(i)!;
		const word = words.at(i)!;

		if (charMap.has(char) && charMap.get(char) !== word) return false;
		if (wordMap.has(word) && wordMap.get(word) !== char) return false;

		charMap.set(char, word);
		wordMap.set(word, char);
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(wordPattern("abba", "dog cat cat dog"), true);
});

Deno.test("Case 2", () => {
	assertEquals(wordPattern("abba", "dog cat cat fish"), false);
});

Deno.test("Case 3", () => {
	assertEquals(wordPattern("aaaa", "dog cat cat dog"), false);
});

Deno.test("Case 4", () => {
	assertEquals(wordPattern("abba", "dog constructor constructor dog"), true);
});
