import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function convert(s: string, numRows: number): string {
	if (numRows === 1) return s;

	const grid = new Array<string>(numRows).fill("");

	const firstRow = 0;
	const finalRow = numRows - 1;

	let row = 0;
	let dir = true;

	for (let i = 0; i < s.length; i++) {
		if (row === firstRow) dir = true;
		if (row === finalRow) dir = false;

		grid[row] += s.at(i)!;

		if (dir) {
			row++;
		} else {
			row--;
		}
	}

	return grid.join("");
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
});

Deno.test("Case 2", () => {
	assertEquals(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
});

Deno.test("Case 3", () => {
	assertEquals(convert("A", 1), "A");
});

Deno.test("Case 4", () => {
	assertEquals(convert("AB", 1), "AB");
});
