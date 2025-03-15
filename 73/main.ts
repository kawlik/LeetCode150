import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function setZeroes(matrix: number[][]): void {
	const M = matrix.length;
	const N = matrix[0].length;

	let hasZeroFirstRow = false;
	let hasZeroFirstCol = false;

	for (let m = 0; m < M; m++) {
		if (matrix[m][0] === 0) hasZeroFirstCol = true;
	}

	for (let n = 0; n < N; n++) {
		if (matrix[0][n] === 0) hasZeroFirstRow = true;
	}

	for (let m = 1; m < M; m++) {
		for (let n = 1; n < N; n++) {
			if (matrix[m][n] === 0) {
				matrix[m][0] = 0;
				matrix[0][n] = 0;
			}
		}
	}

	for (let m = 1; m < M; m++) {
		if (matrix[m][0] === 0) {
			for (let n = 0; n < N; n++) {
				matrix[m][n] = 0;
			}
		}
	}

	for (let n = 1; n < N; n++) {
		if (matrix[0][n] === 0) {
			for (let m = 0; m < M; m++) {
				matrix[m][n] = 0;
			}
		}
	}

	if (hasZeroFirstCol) {
		for (let m = 0; m < M; m++) {
			matrix[m][0] = 0;
		}
	}

	if (hasZeroFirstRow) {
		for (let n = 0; n < N; n++) {
			matrix[0][n] = 0;
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
