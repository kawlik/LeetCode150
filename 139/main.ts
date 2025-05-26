import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function wordBreak(s: string, wordDict: string[]): boolean {
	const memo = new Array<boolean>(s.length + 1).fill(false);
	const words = new Set(wordDict);

	memo[0] = true;

	for (let i = 1; i <= s.length; i++) {
		for (let j = 0; j < i; j++) {
			if (memo[j] && words.has(s.substring(j, i))) {
				memo[i] = true;
				break;
			}
		}
	}

	return memo.at(-1)!;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(wordBreak("leetcode", ["leet", "code"]), true);
});

Deno.test("Case 2", () => {
	assertEquals(wordBreak("applepenapple", ["apple", "pen"]), true);
});

Deno.test("Case 3", () => {
	assertEquals(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]), false);
});
