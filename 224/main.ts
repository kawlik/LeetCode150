import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function calculate(s: string): number {
	let index = 0;

	return (function evalulate(s: string): number {
		let num = 0;
		let res = 0;
		let sign = +1;

		while (index < s.length) {
			const c = s[index++];

			// numeric
			if (Number.isInteger(Number.parseInt(c))) {
				num *= 10;
				num += +c;
			}

			// operand add
			if (c === "+") {
				res += sign * num;
				num = 0;
				sign = +1;
			}

			// operand sub
			if (c === "-") {
				res += sign * num;
				num = 0;
				sign = -1;
			}

			// opening bracket
			if (c === "(") {
				num = evalulate(s);
			}

			// closing bracket
			if (c === ")") {
				return res + sign * num;
			}
		}

		return res + sign * num;
	}(s));
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(calculate("1 + 1"), 2);
});

Deno.test("Case 2", () => {
	assertEquals(calculate(" 2-1 + 2 "), 3);
});

Deno.test("Case 3", () => {
	assertEquals(calculate("(1+(4+5+2)-3)+(6+8)"), 23);
});
