import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function containsNearbyDuplicate(nums: number[], k: number): boolean {
	if (k === 0) return false;

	k = Math.min(k, nums.length);

	const set = new Set<number>();

	for (let i = 0; i < k; i++) {
		if (set.has(nums[i])) return true;

		set.add(nums[i]);
	}

	for (let i = k; i < nums.length; i++) {
		if (set.has(nums[i])) return true;

		set.delete(nums[i - k]);
		set.add(nums[i]);
	}

	return false;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
});

Deno.test("Case 2", () => {
	assertEquals(containsNearbyDuplicate([1, 0, 1, 1], 1), true);
});

Deno.test("Case 3", () => {
	assertEquals(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false);
});

Deno.test("Case 4", () => {
	assertEquals(containsNearbyDuplicate([1, 2, 3, 5, 6, 7, 8, 9, 10], 15), false);
});
