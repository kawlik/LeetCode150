import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function snakesAndLadders(board: number[][]): number {
	const board$ = (cell: number): number => {
		const n = board.length;
		const r = Math.floor((cell - 1) / n);

		const row = n - 1 - r;
		const col = r % 2 == 0 ? cell - 1 - r * n : n + r * n - cell;

		return board[row][col];
	};

	const visited = new Set<number>([1]);
	const queue: [cell: number, roll: number][] = [[1, 0]];
	const final = board.length ** 2;

	while (queue.length) {
		const [cell, roll] = queue.shift()!;

		if (cell === final) return roll;

		for (let i = 1; i <= 6 && cell + i <= final; i++) {
			let next = cell + i;

			if (board$(next) > 0) {
				visited.add(next);
				next = board$(next);
			}

			if (visited.has(next)) continue;

			queue.push([next, roll + 1]);
			visited.add(next);
		}
	}

	return -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const board = [
		[-1, -1, -1, -1, -1, -1],
		[-1, -1, -1, -1, -1, -1],
		[-1, -1, -1, -1, -1, -1],
		[-1, 35, -1, -1, 13, -1],
		[-1, -1, -1, -1, -1, -1],
		[-1, 15, -1, -1, -1, -1],
	];

	assertEquals(snakesAndLadders(board), 4);
});

Deno.test("Case 2", () => {
	const board = [[-1, -1], [-1, 3]];

	assertEquals(snakesAndLadders(board), 1);
});
