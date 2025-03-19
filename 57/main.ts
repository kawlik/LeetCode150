import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function insert(intervals: number[][], newInterval: number[]): number[][] {
	intervals.push(newInterval);
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
	const intervals = [[1, 3], [6, 9]];
	const newInterval = [2, 5];
	const output = [[1, 5], [6, 9]];

	assertEquals(insert(intervals, newInterval), output);
});

Deno.test("Case 2", () => {
	const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
	const newInterval = [4, 8];
	const output = [[1, 2], [3, 10], [12, 16]];

	assertEquals(insert(intervals, newInterval), output);
});
