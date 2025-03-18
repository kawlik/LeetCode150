import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function summaryRanges(nums: number[]): string[] {
	const ranges: string[] = [];

	let i = 0;
	let j = 0;

	while (i < nums.length) {
		while (nums[j] + 1 === nums[j + 1]) j++;

		const p = nums[i];
		const q = nums[j];

		if (p === q) {
			ranges.push(`${p}`);
		} else {
			ranges.push(`${p}->${q}`);
		}

		i = ++j;
	}

	return ranges;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]);
});

Deno.test("Case 2", () => {
	assertEquals(summaryRanges([0, 2, 3, 4, 6, 8, 9]), ["0", "2->4", "6", "8->9"]);
});
