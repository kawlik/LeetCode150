import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function minSubArrayLen(target: number, nums: number[]): number {
	let p = 0;
	let q = 0;

	let sum = 0;
	let min = Infinity;

	while (true) {
		while (q < nums.length && sum < target) sum += nums[q++];

		// window to short
		if (sum < target) break;

		while (p < nums.length && sum >= target) sum -= nums[p++];

		// window to short
		if (sum >= target) break;

		min = Math.min(min, q - p + 1);
	}

	return min < Infinity ? min : 0;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
});

Deno.test("Case 2", () => {
	assertEquals(minSubArrayLen(4, [1, 4, 4]), 1);
});

Deno.test("Case 3", () => {
	assertEquals(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]), 0);
});

Deno.test("Case 4", () => {
	assertEquals(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]), 8);
});

Deno.test("Case 5", () => {
	assertEquals(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]), 2);
});
