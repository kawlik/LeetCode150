import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isAnagram(s: string, t: string): boolean {
	const angramLetters: { [letter: string]: number } = {};

	for (const letter of s) {
		if (angramLetters[letter]) {
			angramLetters[letter]++;
		} else {
			angramLetters[letter] = 1;
		}
	}

	for (const letter of t) {
		if (angramLetters[letter] && angramLetters[letter] > 0) {
			angramLetters[letter]--;
		} else {
			return false;
		}
	}

	return Object.values(angramLetters).every((letter) => letter === 0);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(isAnagram("anagram", "nagaram"), true);
});

Deno.test("Case 2", () => {
	assertEquals(isAnagram("rat", "car"), false);
});

Deno.test("Case 3", () => {
	assertEquals(isAnagram("ab", "a"), false);
});
