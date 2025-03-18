import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isHappy(n: number): boolean {
	const checked = new Set<string>();

	let str = n.toString();

	while (!checked.has(str)) {
		checked.add(str);

		n = 0;

		for (const digit of [...str]) {
			n += (+digit) ** 2;
		}

		str = n.toString();
	}

	return checked.has("1");
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(isHappy(19), true);
});

Deno.test("Case 2", () => {
	assertEquals(isHappy(2), false);
});
