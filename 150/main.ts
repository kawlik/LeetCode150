import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function evalRPN(tokens: string[]): number {
	const stack: number[] = [];

	const $ = (op: (a: number, b: number) => number): number => {
		const b = stack.pop()!;
		const a = stack.pop()!;

		return op(a, b);
	};

	for (const token of tokens) {
		switch (token) {
			case "+":
				stack.push($((a, b) => a + b));
				break;
			case "-":
				stack.push($((a, b) => a - b));
				break;
			case "*":
				stack.push($((a, b) => a * b));
				break;
			case "/":
				stack.push($((a, b) => Math.trunc(a / b)));
				break;
			default:
				stack.push(+token);
				break;
		}
	}

	return stack[0];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(evalRPN(["2", "1", "+", "3", "*"]), 9);
});

Deno.test("Case 2", () => {
	assertEquals(evalRPN(["4", "13", "5", "/", "+"]), 6);
});

Deno.test("Case 3", () => {
	assertEquals(
		evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]),
		22,
	);
});
