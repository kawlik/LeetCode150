import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function intToRoman(num: number): string {
	let roman = "";

	const M = Math.floor(num / 1000);
	const D = Math.floor((num -= M * 1000) / 500);
	const C = Math.floor((num -= D * 500) / 100);
	const L = Math.floor((num -= C * 100) / 50);
	const X = Math.floor((num -= L * 50) / 10);
	const V = Math.floor((num -= X * 10) / 5);
	const I = Math.floor(num -= V * 5);

	if (M) roman += "M".repeat(M);

	if (D === 1 && C === 4) roman += "CM";
	if (D === 1 && C !== 4) roman += "D" + "C".repeat(C);

	if (D === 0 && C === 4) roman += "CD";
	if (D === 0 && C !== 4) roman += "C".repeat(C);

	if (L === 1 && X === 4) roman += "XC";
	if (L === 1 && X !== 4) roman += "L" + "X".repeat(X);

	if (L === 0 && X === 4) roman += "XL";
	if (L === 0 && X !== 4) roman += "X".repeat(X);

	if (V === 1 && I === 4) roman += "IX";
	if (V === 1 && I !== 4) roman += "V" + "I".repeat(I);

	if (V === 0 && I === 4) roman += "IV";
	if (V === 0 && I !== 4) roman += "I".repeat(I);

	return roman;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(intToRoman(3749), "MMMDCCXLIX");
});

Deno.test("Case 2", () => {
	assertEquals(intToRoman(58), "LVIII");
});

Deno.test("Case 3", () => {
	assertEquals(intToRoman(1994), "MCMXCIV");
});
