import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function rob(nums: number[]): number {
	const sack = new Array<number>(nums.length);

	for (let i = 0; i < nums.length; i++) {
		const a = sack[i - 2] || 0;
		const b = sack[i - 1] || 0;

		sack[i] = Math.max(nums[i] + a, b);
	}

	return sack.at(-1)!;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(rob([1, 2, 3, 1]), 4);
});

Deno.test("Case 2", () => {
	assertEquals(rob([2, 7, 9, 3, 1]), 12);
});
