import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isIsomorphic(s: string, t: string): boolean {
	const mapInto: { [char: string]: string } = {};
	const mapFrom: { [char: string]: string } = {};

	for (let i = 0; i < s.length; i++) {
		const char_s = s.at(i)!;
		const char_t = t.at(i)!;

		if (mapInto[char_s] && mapInto[char_s] !== char_t) return false;
		if (mapFrom[char_t] && mapFrom[char_t] !== char_s) return false;

		mapInto[char_s] = char_t;
		mapFrom[char_t] = char_s;
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(isIsomorphic("egg", "add"), true);
});

Deno.test("Case 2", () => {
	assertEquals(isIsomorphic("foo", "bar"), false);
});

Deno.test("Case 3", () => {
	assertEquals(isIsomorphic("paper", "title"), true);
});

Deno.test("Case 4", () => {
	assertEquals(isIsomorphic("badc", "baba"), false);
});
