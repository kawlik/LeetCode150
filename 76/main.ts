import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function minWindow(s: string, t: string): string {
	const charCount: { [char: string]: number } = {};

	for (let i = 0; i < t.length; i++) {
		if (charCount[t[i]]) {
			charCount[t[i]]++;
		} else {
			charCount[t[i]] = 1;
		}
	}

	let p = 0;
	let q = 0;

	let charsLeft = t.length;
	let minString = "";

	while (q < s.length) {
		while (q < s.length && charsLeft > 0) {
			if (Object.hasOwn(charCount, s[q])) {
				if (--charCount[s[q]] >= 0) charsLeft--;
			}

			q++;
		}

		if (charsLeft > 0) break;

		while (p < s.length) {
			if (Object.hasOwn(charCount, s[p])) {
				if (++charCount[s[p]] >= 1) break;
			}

			p++;
		}

		if (minString.length > q - p || minString.length === 0) {
			minString = s.substring(p, q);
		}

		charsLeft++;
		p++;
	}

	return minString;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(minWindow("ADOBECODEBANC", "ABC"), "BANC");
});

Deno.test("Case 2", () => {
	assertEquals(minWindow("a", "a"), "a");
});

Deno.test("Case 3", () => {
	assertEquals(minWindow("a", "aa"), "");
});

Deno.test("Case 4", () => {
	assertEquals(minWindow("bdab", "ab"), "ab");
});

Deno.test("Case 5", () => {
	assertEquals(minWindow("cabeca", "cae"), "eca");
});

Deno.test("Case 6", () => {
	assertEquals(minWindow("caaec", "cae"), "aec");
});
