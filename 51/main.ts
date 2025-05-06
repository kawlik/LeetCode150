import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function solveNQueens(n: number): string[][] {
	const result = new Array<string[]>();
	const board = new Array<string[]>(n);

	for (let i = 0; i < n; i++) board[i] = [...".".repeat(n)];

	const isSafe = (row: number, col: number): boolean => {
		for (let i = 0; i < n; i++) {
			if (board[i][col] === "Q") return false;
			if (row - i >= 0 && col - i >= 0 && board[row - i][col - i] === "Q") return false;
			if (row - i >= 0 && col + i < n && board[row - i][col + i] === "Q") return false;
		}

		return true;
	};

	const solve = (row: number): void => {
		if (row === n) return void (result.push(board.map((line) => line.join(""))));

		for (let col = 0; col < n; col++) {
			if (isSafe(row, col)) {
				board[row][col] = "Q";
				solve(row + 1);
				board[row][col] = ".";
			}
		}
	};

	solve(0);

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(
		solveNQueens(4),
		[[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]],
	);
});

Deno.test("Case 2", () => {
	assertEquals(solveNQueens(1), [["Q"]]);
});
