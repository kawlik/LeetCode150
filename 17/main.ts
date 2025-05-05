import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function letterCombinations(digits: string): string[] {
	if (digits.length < 1) return [];

	const mappings: string[] = [];
	const letters: { [digit: string]: string[] } = {
		"2": ["a", "b", "c"],
		"3": ["d", "e", "f"],
		"4": ["g", "h", "i"],
		"5": ["j", "k", "l"],
		"6": ["m", "n", "o"],
		"7": ["p", "q", "r", "s"],
		"8": ["t", "u", "v"],
		"9": ["w", "x", "y", "z"],
	};

	const dfs = (idx: number, str = ""): void => {
		if (idx === digits.length - 1) {
			mappings.push(str);
		} else {
			for (const char of letters[digits[idx + 1]]) {
				dfs(idx + 1, str + char);
			}
		}
	};

	for (const char of letters[digits[0]]) {
		dfs(0, char);
	}

	return mappings;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(
		letterCombinations("23"),
		["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
	);
});

Deno.test("Case 2", () => {
	assertEquals(letterCombinations(""), []);
});

Deno.test("Case 3", () => {
	assertEquals(letterCombinations("2"), ["a", "b", "c"]);
});
