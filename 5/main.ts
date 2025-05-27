import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function longestPalindrome(s: string): string {
	const expand = (p: number, q: number): [p: number, q: number] => {
		while (p >= 0 && q < s.length && s[p] === s[q]) {
			p--;
			q++;
		}

		return [p + 1, q];
	};

	let p = 0;
	let q = 1;

	for (let i = 0; i < s.length; i++) {
		const [p1, q1] = expand(i, i);
		const [p2, q2] = expand(i, i + 1);

		if (q1 - p1 > q - p) {
			p = p1;
			q = q1;
		}

		if (q2 - p2 > q - p) {
			p = p2;
			q = q2;
		}
	}

	return s.slice(p, q);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(longestPalindrome("babad"), "bab");
});

Deno.test("Case 2", () => {
	assertEquals(longestPalindrome("cbbd"), "bb");
});
