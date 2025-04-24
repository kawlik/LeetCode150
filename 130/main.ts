import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function solve(board: string[][]): void {
	const M = board.length;
	const N = board[0].length;

	const dfsTest = (m: number, n: number): boolean => {
		if (m < 0 || m >= M) return false;
		if (n < 0 || n >= N) return false;
		if (board[m][n] !== "O") return true;

		board[m][n] = "?";

		return [
			dfsTest(m - 1, n),
			dfsTest(m + 1, n),
			dfsTest(m, n + 1),
			dfsTest(m, n - 1),
		].every((v) => v);
	};

	const dfsMark = (m: number, n: number, mark: "X" | "O"): void => {
		if (m < 0 || m >= M) return;
		if (n < 0 || n >= N) return;
		if (board[m][n] !== "?") return;

		board[m][n] = mark;

		dfsMark(m - 1, n, mark);
		dfsMark(m + 1, n, mark);
		dfsMark(m, n + 1, mark);
		dfsMark(m, n - 1, mark);
	};

	const memo: [m: number, n: number, isSurrounded: boolean][] = [];

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (board[m][n] === "O") memo.push([m, n, dfsTest(m, n)]);
		}
	}

	for (const [m, n, isSurrounded] of memo) {
		dfsMark(m, n, isSurrounded ? "X" : "O");
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const board = [
		["X", "X", "X", "X"],
		["X", "O", "O", "X"],
		["X", "X", "O", "X"],
		["X", "O", "X", "X"],
	];
	const output = [
		["X", "X", "X", "X"],
		["X", "X", "X", "X"],
		["X", "X", "X", "X"],
		["X", "O", "X", "X"],
	];

	solve(board);

	assertEquals(board, output);
});

Deno.test("Case 2", () => {
	const board = [["X"]];
	const output = [["X"]];

	solve(board);

	assertEquals(board, output);
});
