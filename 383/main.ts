import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function canConstruct(ransomNote: string, magazine: string): boolean {
	const magazineLetters: { [letter: string]: number } = {};

	for (const letter of magazine) {
		if (magazineLetters[letter]) {
			magazineLetters[letter]++;
		} else {
			magazineLetters[letter] = 1;
		}
	}

	for (const letter of ransomNote) {
		if (magazineLetters[letter] > 0) {
			magazineLetters[letter]--;
		} else {
			return false;
		}
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(canConstruct("a", "b"), false);
});

Deno.test("Case 2", () => {
	assertEquals(canConstruct("aa", "ab"), false);
});

Deno.test("Case 3", () => {
	assertEquals(canConstruct("aa", "aab"), true);
});
