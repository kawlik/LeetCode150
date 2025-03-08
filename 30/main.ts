import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function findSubstring(s: string, words: string[]): number[] {
	const len = words[0].length;
	const res = new Array<number>();
	const set = new Set<string>(words);

	const wordsCount: { [words: string]: number } = {};

	for (const word of words) {
		if (wordsCount[word]) {
			wordsCount[word]++;
		} else {
			wordsCount[word] = 1;
		}
	}

	const isSubstring = (counter: { [words: string]: number }, i: number, d = 0): boolean => {
		if (d === words.length) return true;

		const nextSequence = s.substring(i, i + len);

		if (counter[nextSequence] > 0) {
			counter[nextSequence]--;
			return isSubstring(counter, i + len, d + 1);
		} else {
			return false;
		}
	};

	for (let i = 0; i <= s.length - (len * words.length); i++) {
		if (set.has(s.substring(i, i + len))) {
			const counter = { ...wordsCount };

			if (isSubstring(counter, i)) res.push(i);
		}
	}

	return res;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const s = "barfoothefoobarman";
	const words = ["foo", "bar"];

	assertEquals(findSubstring(s, words), [0, 9]);
});

Deno.test("Case 2", () => {
	const s = "wordgoodgoodgoodbestword";
	const words = ["word", "good", "best", "word"];

	assertEquals(findSubstring(s, words), []);
});

Deno.test("Case 3", () => {
	const s = "barfoofoobarthefoobarman";
	const words = ["bar", "foo", "the"];

	assertEquals(findSubstring(s, words), [6, 9, 12]);
});

Deno.test("Case 4", () => {
	const s = "wordgoodgoodgoodbestword";
	const words = ["word", "good", "best", "good"];

	assertEquals(findSubstring(s, words), [8]);
});
