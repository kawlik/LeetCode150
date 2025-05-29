import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

const memo: { [word1: string]: { [word2: string]: number } } = {};

function minDistance(word1: string, word2: string): number {
	if (word1 === word2) return 0;
	if (!word1.length) return word2.length;
	if (!word2.length) return word1.length;

	const sstr1 = word1.slice(1);
	const sstr2 = word2.slice(1);

	if (word1[0] === word2[0]) return minDistance(sstr1, sstr2);

	if (Object.hasOwn(memo, word1)) {
		if (Object.hasOwn(memo[word1], word2)) return memo[word1][word2];
	} else {
		memo[word1] = {};
	}

	const op_1 = minDistance(sstr1, word2);
	const op_2 = minDistance(word1, sstr2);
	const op_3 = minDistance(sstr1, sstr2);

	memo[word1][word2] = 1 + Math.min(op_1, op_2, op_3);

	return memo[word1][word2];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(minDistance("horse", "ros"), 3);
});

Deno.test("Case 2", () => {
	assertEquals(minDistance("intention", "execution"), 5);
});
