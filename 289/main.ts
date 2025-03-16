import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function gameOfLife(board: number[][]): void {
	const M = board.length;
	const N = board[0].length;

	const deadCell = 0;
	const liveCell = 1;
	const snapshot = board.map((line) => [...line]);

	const countNeighbors = (m: number, n: number): number => {
		let numNeighbors = 0;

		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				if (m + i < 0 || m + i >= M) continue;
				if (n + j < 0 || n + j >= N) continue;
				if (i === 0 && j === 0) continue;

				if (snapshot[m + i][n + j] === liveCell) numNeighbors++;
			}
		}

		return numNeighbors;
	};

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			const numNeighbors = countNeighbors(m, n);

			if (snapshot[m][n] === deadCell && numNeighbors === 3) board[m][n] = liveCell;
			if (snapshot[m][n] === liveCell && numNeighbors > 3) board[m][n] = deadCell;
			if (snapshot[m][n] === liveCell && numNeighbors < 2) board[m][n] = deadCell;
		}
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
	const expect = [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]];

	gameOfLife(board);

	assertEquals(board, expect);
});

Deno.test("Case 2", () => {
	const board = [[1, 1], [1, 0]];
	const expect = [[1, 1], [1, 1]];

	gameOfLife(board);

	assertEquals(board, expect);
});
