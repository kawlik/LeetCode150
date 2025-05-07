import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function exist(board: string[][], word: string): boolean {
	const M = board.length;
	const N = board[0].length;

	const find = (m: number, n: number, idx: number): boolean => {
		if (idx === word.length) return true;

		for (const [dx, dy] of [[-1, 0], [0, -1], [+1, 0], [0, +1]]) {
			const _m = m + dx;
			const _n = n + dy;

			if (_m < 0 || _m >= M) continue;
			if (_n < 0 || _n >= N) continue;

			if (board[_m][_n] === word[idx]) {
				const tmp = board[_m][_n];

				board[_m][_n] = "#";

				if (find(_m, _n, idx + 1)) return true;

				board[_m][_n] = tmp;
			}
		}

		return false;
	};

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			if (board[m][n] === word[0]) {
				const tmp = board[m][n];

				board[m][n] = "#";

				if (find(m, n, 1)) return true;

				board[m][n] = tmp;
			}
		}
	}

	return false;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
	const word = "ABCCED";

	assertEquals(exist(board, word), true);
});

Deno.test("Case 2", () => {
	const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
	const word = "SEE";

	assertEquals(exist(board, word), true);
});

Deno.test("Case 3", () => {
	const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
	const word = "ABCB";

	assertEquals(exist(board, word), false);
});
