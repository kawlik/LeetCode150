import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function generateParenthesis(n: number): string[] {
	const validParenthesis = <string[]> [];

	const solve = (str = "", p = n, q = n): void => {
		if (p === 0 && q === 0) return void (validParenthesis.push(str));

		if (p > 0) solve(str + "(", p - 1, q);
		if (q > p) solve(str + ")", p, q - 1);
	};

	solve();

	return validParenthesis;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
});

Deno.test("Case 2", () => {
	assertEquals(generateParenthesis(1), ["()"]);
});
