import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function romanToInt(roman: string): number {
	let intiger = 0;

	for (let i = 0; i < roman.length; i++) {
		switch (roman.at(i)) {
			case "I":
				if (roman.at(i + 1) === "V" || roman.at(i + 1) === "X") {
					intiger -= 1;
				} else {
					intiger += 1;
				}
				break;
			case "V":
				intiger += 5;
				break;
			case "X":
				if (roman.at(i + 1) === "L" || roman.at(i + 1) === "C") {
					intiger -= 10;
				} else {
					intiger += 10;
				}
				break;
			case "L":
				intiger += 50;
				break;
			case "C":
				if (roman.at(i + 1) === "D" || roman.at(i + 1) === "M") {
					intiger -= 100;
				} else {
					intiger += 100;
				}
				break;
			case "D":
				intiger += 500;
				break;
			case "M":
				intiger += 1000;
				break;
		}
	}

	return intiger;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(romanToInt("III"), 3);
});

Deno.test("Case 2", () => {
	assertEquals(romanToInt("LVIII"), 58);
});

Deno.test("Case 3", () => {
	assertEquals(romanToInt("MCMXCIV"), 1994);
});
