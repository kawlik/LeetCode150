import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function minimumTotal(triangle: number[][]): number {
	const path = triangle.map((row) => row.map(() => Infinity));
	path[0][0] = triangle[0][0];

	for (let row = 1; row < triangle.length; row++) {
		for (let col = 0; col < triangle[row].length; col++) {
			const cost = triangle[row][col];

			if (col !== 0) {
				path[row][col] = Math.min(path[row][col], cost + path[row - 1][col - 1]);
			}

			if (col !== row) {
				path[row][col] = Math.min(path[row][col], cost + path[row - 1][col]);
			}
		}
	}

	return Math.min(...path.at(-1)!);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]), 11);
});

Deno.test("Case 2", () => {
	assertEquals(minimumTotal([[-10]]), -10);
});

Deno.test("Case 3", () => {
	assertEquals(minimumTotal([[-1], [2, 3], [1, -1, -1]]), 0);
});

Deno.test("Case 4", () => {
	assertEquals(minimumTotal([[-1], [-2, -3]]), -4);
});
