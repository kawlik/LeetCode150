import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function canJump(nums: number[]): boolean {
	let maxReach = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (maxReach === 0) return false;

		maxReach = Math.max(maxReach - 1, nums[i]);
	}

	return true;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(canJump([2, 3, 1, 1, 4]), true);
});

Deno.test("Case 2", () => {
	assertEquals(canJump([3, 2, 1, 0, 4]), false);
});

Deno.test("Case 3", () => {
	assertEquals(canJump([2, 0]), true);
});

Deno.test("Case 4", () => {
	assertEquals(canJump([0]), true);
});

canJump([2, 3, 1, 1, 4]);
