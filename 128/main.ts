import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function longestConsecutive(nums: number[]): number {
	const set = new Set<number>(nums);

	let currentSequence = 0;
	let longestSequence = 0;

	for (let num of nums) {
		if (set.has(num + 1) || !set.has(num - longestSequence)) continue;

		currentSequence = 1;

		while (set.has(--num)) currentSequence++;

		longestSequence = Math.max(longestSequence, currentSequence);
	}

	return longestSequence;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
});

Deno.test("Case 2", () => {
	assertEquals(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
});

Deno.test("Case 3", () => {
	assertEquals(longestConsecutive([1, 0, 1, 2]), 3);
});

Deno.test("Case 4", () => {
	assertEquals(longestConsecutive([]), 0);
});
