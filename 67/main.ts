import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function addBinary(a: string, b: string): string {
	const str_a = a.split("").reverse();
	const str_b = b.split("").reverse();

	// register
	const str_c = new Array<string>(Math.max(a.length, b.length));

	for (let i = 0; i < str_c.length; i++) {
		let delta = 0;

		if (str_a[i] === "1") delta++;
		if (str_b[i] === "1") delta++;
		if (str_c[i] === "1") delta++;

		if (delta & 1) {
			str_c[i] = "1";
		} else {
			str_c[i] = "0";
		}

		if (delta > 1) str_c[i + 1] = "1";
	}

	return str_c.reverse().join("");
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(addBinary("11", "1"), "100");
});

Deno.test("Case 2", () => {
	assertEquals(addBinary("1010", "1011"), "10101");
});

Deno.test("Case 3", () => {
	assertEquals(addBinary("0", "0"), "0");
});

Deno.test("Case 4", () => {
	assertEquals(addBinary("1", "1"), "10");
});
