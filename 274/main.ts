import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function hIndex(citations: number[]): number {
	citations.sort((p, q) => p - q);

	let max = 0;

	for (let i = 0; i < citations.length; i++) {
		max = Math.max(max, Math.min(citations[i], citations.length - i));
	}

	return max;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(hIndex([3, 0, 6, 1, 5]), 3);
});

Deno.test("Case 2", () => {
	assertEquals(hIndex([1, 3, 1]), 1);
});
