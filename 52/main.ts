import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function totalNQueens(n: number): number {
	const board = Array.from({ length: n }, () => [...".".repeat(n)]);
	let nQueens = 0;

	const isSafe = (row: number, col: number): boolean => {
		for (let i = 0; i < n; i++) {
			if (board[i][col] === "Q") return false;
			if (row - i >= 0 && col - i >= 0 && board[row - i][col - i] === "Q") return false;
			if (row - i >= 0 && col + i < n && board[row - i][col + i] === "Q") return false;
		}

		return true;
	};

	const solve = (row: number): void => {
		if (row === n) return void (nQueens++);

		for (let col = 0; col < n; col++) {
			if (isSafe(row, col)) {
				board[row][col] = "Q";
				solve(row + 1);
				board[row][col] = ".";
			}
		}
	};

	solve(0);

	return nQueens;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(totalNQueens(4), 2);
});

Deno.test("Case 2", () => {
	assertEquals(totalNQueens(1), 1);
});
