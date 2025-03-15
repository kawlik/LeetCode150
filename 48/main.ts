import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function rotate(matrix: number[][]): void {
	const snapshot = matrix.map((line) => [...line]);

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix.length; col++) {
			matrix[col][matrix.length - row - 1] = snapshot[row][col];
		}
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
	const output = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

	rotate(matrix);

	assertEquals(matrix, output);
});

Deno.test("Case 2", () => {
	const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
	const output = [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]];

	rotate(matrix);

	assertEquals(matrix, output);
});
