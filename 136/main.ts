import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function singleNumber(nums: number[]): number {
	let xor = 0;

	for (const num of nums) xor ^= num;

	return xor;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(singleNumber([2, 2, 1]), 1);
});

Deno.test("Case 2", () => {
	assertEquals(singleNumber([4, 1, 2, 1, 2]), 4);
});

Deno.test("Case 3", () => {
	assertEquals(singleNumber([1]), 1);
});
