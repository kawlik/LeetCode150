import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isValid(s: string): boolean {
	const stack = <string[]> [];

	for (const char of s) {
		switch (char) {
			case "(":
				stack.push(char);
				break;
			case ")":
				if (stack.at(-1) === "(") {
					stack.pop();
				} else {
					return false;
				}
				break;
			case "{":
				stack.push(char);
				break;
			case "}":
				if (stack.at(-1) === "{") {
					stack.pop();
				} else {
					return false;
				}
				break;
			case "[":
				stack.push(char);
				break;
			case "]":
				if (stack.at(-1) === "[") {
					stack.pop();
				} else {
					return false;
				}
				break;
		}
	}

	return !stack.length;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(isValid("()"), true);
});

Deno.test("Case 2", () => {
	assertEquals(isValid("()[]{}"), true);
});

Deno.test("Case 3", () => {
	assertEquals(isValid("(]"), false);
});

Deno.test("Case 4", () => {
	assertEquals(isValid("([])"), true);
});

Deno.test("Case 5", () => {
	assertEquals(isValid("["), false);
});
