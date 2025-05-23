import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function singleNumber(nums: number[]): number {
	let mask_1 = 0b0;
	let mask_2 = 0b0;

	for (const num of nums) {
		mask_1 = (mask_1 ^ num) & ~mask_2;
		mask_2 = (mask_2 ^ num) & ~mask_1;
	}

	return mask_1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(singleNumber([2, 2, 3, 2]), 3);
});

Deno.test("Case 2", () => {
	assertEquals(singleNumber([0, 1, 0, 1, 0, 1, 99]), 99);
});
