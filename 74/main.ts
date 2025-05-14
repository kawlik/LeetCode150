import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function searchMatrix(matrix: number[][], target: number): boolean {
	const M = matrix.length;
	const N = matrix[0].length;

	if (matrix[0][0] > target || matrix[M - 1][N - 1] < target) return false;

	const searchRow = (p: number, q: number): number => {
		if (q <= p) return p;

		const o = (p + q) >> 1;

		if (matrix[o][N - 1] < target) {
			return searchRow(o + 1, q);
		} else {
			return searchRow(p, o);
		}
	};

	const searchCol = (p: number, q: number, row: number): number => {
		if (q <= p) return p;

		const o = (p + q) >> 1;

		if (matrix[row][o] < target) {
			return searchCol(o + 1, q, row);
		} else {
			return searchCol(p, o, row);
		}
	};

	const row = searchRow(0, M - 1);
	const col = searchCol(0, N - 1, row);

	return matrix[row][col] === target;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3), true);
});

Deno.test("Case 2", () => {
	assertEquals(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13), false);
});
