import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function productExceptSelf(nums: number[]): number[] {
	let hasZero = false;
	let product = 1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0 && !hasZero) {
			hasZero = true;
		} else {
			product *= nums[i];
		}
	}

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			nums[i] = product;
		} else {
			nums[i] = hasZero ? 0 : product / nums[i];
		}
	}

	return nums;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
});

Deno.test("Case 2", () => {
	assertEquals(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
});
