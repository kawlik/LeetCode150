import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function findMinArrowShots(points: number[][]): number {
	points.sort((p, q) => p[1] - q[1]);

	let maxOffset = points[0][1];
	let numArrows = 1;

	for (let i = 0; i < points.length; i++) {
		if (maxOffset < points[i][0]) {
			maxOffset = points[i][1];
			numArrows++;
		}
	}

	return numArrows;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]), 2);
});

Deno.test("Case 2", () => {
	assertEquals(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]]), 4);
});

Deno.test("Case 3", () => {
	assertEquals(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]]), 2);
});

Deno.test("Case 4", () => {
	assertEquals(
		findMinArrowShots([[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [
			0,
			6,
		], [2, 8]]),
		2,
	);
});
