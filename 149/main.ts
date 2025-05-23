import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxPoints(points: number[][]): number {
	let count = 0;

	for (const p1 of points) {
		const slopes = new Map<number, number>();

		for (const p2 of points) {
			if (p1 === p2) continue;

			const [x1, y1] = p1;
			const [x2, y2] = p2;

			let slope = Infinity;

			if ((x2 - x1) !== 0) {
				slope = (y2 - y1) / (x2 - x1);
			}

			slopes.set(slope, 1 + (slopes.get(slope) || 0));
			count = Math.max(count, slopes.get(slope)!);
		}
	}

	return count + 1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(maxPoints([[1, 1], [2, 2], [3, 3]]), 3);
});

Deno.test("Case 2", () => {
	assertEquals(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]), 4);
});
