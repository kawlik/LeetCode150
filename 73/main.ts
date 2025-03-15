import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function setZeroes(matrix: number[][]): void {
	const M = matrix.length;
	const N = matrix[0].length;

	const zeroRows = new Set<number>();
	const zeroCols = new Set<number>();

	for (let row = 0; row < M; row++) {
		for (let col = 0; col < N; col++) {
			if (matrix[row][col] === 0) {
				zeroRows.add(row);
				zeroCols.add(col);
			}
		}
	}

	for (const row of zeroRows) {
		for (let col = 0; col < N; col++) {
			matrix[row][col] = 0;
		}
	}

	for (const col of zeroCols) {
		for (let row = 0; row < M; row++) {
			matrix[row][col] = 0;
		}
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
	const output = [[1, 0, 1], [0, 0, 0], [1, 0, 1]];

	setZeroes(matrix);

	assertEquals(matrix, output);
});

Deno.test("Case 2", () => {
	const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
	const output = [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]];

	setZeroes(matrix);

	assertEquals(matrix, output);
});
