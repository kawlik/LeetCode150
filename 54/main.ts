import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function spiralOrder(matrix: number[][]): number[] {
	const N = matrix[0].length;
	const M = matrix.length;
	const path: number[] = [];

	let x_p = 0;
	let y_p = 0;
	let x_q = N - 1;
	let y_q = M - 1;

	while (x_p <= x_q && y_p <= y_q) {
		for (let i = x_p; i <= x_q; i++) path.push(matrix[y_p][i]);

		y_p++;

		for (let i = y_p; i <= y_q; i++) path.push(matrix[i][x_q]);

		x_q--;

		if (y_p <= y_q) {
			for (let i = x_q; i >= x_p; i--) path.push(matrix[y_q][i]);

			y_q--;
		}

		if (x_p <= x_q) {
			for (let i = y_q; i >= y_p; i--) path.push(matrix[i][x_p]);

			x_p++;
		}
	}

	return path;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

	assertEquals(spiralOrder(matrix), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

Deno.test("Case 2", () => {
	const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

	assertEquals(spiralOrder(matrix), [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});
