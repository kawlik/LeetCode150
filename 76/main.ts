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

	let minStr = "";

	while (q < s.length) {
		p = q;

		const charsLeft = { ...charCount };
		let numCharsLeft = t.length;

		while (q < s.length && numCharsLeft > 0) {
			if (Object.hasOwn(charsLeft, s[q])) {
				if (--charsLeft[s[q]] >= 0) numCharsLeft--;
			}

			q++;
		}

		if (numCharsLeft > 0) break;

		while (p < s.length) {
			if (Object.hasOwn(charsLeft, s[p])) {
				if (++charsLeft[s[p]] >= 1) break;
			}

			p++;
		}

		if (minStr.length > q - p || minStr.length === 0) {
			minStr = s.substring(p, q);
		}

		while (!Object.hasOwn(charsLeft, s[p++]));

		q = p;
	}

	return minStr;
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
