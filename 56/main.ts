import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function merge(intervals: number[][]): number[][] {
	intervals.sort((p, q) => p[0] - q[0]);

	let index = 0;

	while (index < intervals.length - 1) {
		if (intervals[index][1] < intervals[index + 1][0]) {
			index++;
			continue;
		}

		if (intervals[index][1] < intervals[index + 1][1]) {
			intervals[index][1] = intervals[index + 1][1];
			intervals.splice(index + 1, 1);
		} else {
			intervals.splice(index + 1, 1);
		}
	}

	return intervals;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
});

Deno.test("Case 2", () => {
	assertEquals(merge([[1, 4], [4, 5]]), [[1, 5]]);
});

Deno.test("Case 3", () => {
	assertEquals(merge([[1, 4], [0, 2], [3, 5]]), [[0, 5]]);
});
