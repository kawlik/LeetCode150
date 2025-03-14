import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isValidSudoku(board: string[][]): boolean {
	const isValidBox = (row: number, col: number): boolean => {
		const digits = new Set<string>();

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (board[row + i][col + j] === ".") continue;

				if (digits.has(board[row + i][col + j])) {
					return false;
				} else {
					digits.add(board[row + i][col + j]);
				}
			}
		}

		return true;
	};

	const isValidCol = (col: number): boolean => {
		const digits = new Set<string>();

		for (let i = 0; i < 9; i++) {
			if (board[i][col] === ".") continue;

			if (digits.has(board[i][col])) {
				return false;
			} else {
				digits.add(board[i][col]);
			}
		}

		return true;
	};

	const isValidRow = (row: number): boolean => {
		const digits = new Set<string>();

		for (let i = 0; i < 9; i++) {
			if (board[row][i] === ".") continue;

			if (digits.has(board[row][i])) {
				return false;
			} else {
				digits.add(board[row][i]);
			}
		}

		return true;
	};

	for (let col = 0; col < 9; col++) {
		if (!isValidCol(col)) return false;
	}

	for (let row = 0; row < 9; row++) {
		if (!isValidRow(row)) return false;
	}

	for (let row = 0; row < 9; row += 3) {
		for (let col = 0; col < 9; col += 3) {
			if (!isValidBox(row, col)) return false;
		}
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const board = [
		["5", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	];

	assertEquals(isValidSudoku(board), true);
});

Deno.test("Case 2", () => {
	const board = [
		["8", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	];

	assertEquals(isValidSudoku(board), false);
});

Deno.test("Case 3", () => {
	const board = [
		[".", ".", "4", ".", ".", ".", "6", "3", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", "."],
		["5", ".", ".", ".", ".", ".", ".", "9", "."],
		[".", ".", ".", "5", "6", ".", ".", ".", "."],
		["4", ".", "3", ".", ".", ".", ".", ".", "1"],
		[".", ".", ".", "7", ".", ".", ".", ".", "."],
		[".", ".", ".", "5", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", "."],
	];

	assertEquals(isValidSudoku(board), false);
});

Deno.test("Case 4", () => {
	const board = [
		[".", ".", ".", ".", "5", ".", ".", "1", "."],
		[".", "4", ".", "3", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", "3", ".", ".", "1"],
		["8", ".", ".", ".", ".", ".", ".", "2", "."],
		[".", ".", "2", ".", "7", ".", ".", ".", "."],
		[".", "1", "5", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", "2", ".", ".", "."],
		[".", "2", ".", "9", ".", ".", ".", ".", "."],
		[".", ".", "4", ".", ".", ".", ".", ".", "."],
	];

	assertEquals(isValidSudoku(board), false);
});
