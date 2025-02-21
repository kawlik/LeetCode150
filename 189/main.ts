import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function rotate(nums: number[], k: number): void {
	k %= nums.length;

	let i = nums.length - k;
	let j = nums.length - 1;

	const tail = nums.slice(i);

	while (i > 0) nums[j--] = nums[--i];

	for (let i = 0; i < tail.length; i++) {
		nums[i] = tail[i];
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const nums = [1, 2, 3, 4, 5, 6, 7];
	const k = 3;

	rotate(nums, k);

	assertEquals(nums, [5, 6, 7, 1, 2, 3, 4]);
});

Deno.test("Case 2", () => {
	const nums = [-1, -100, 3, 99];
	const k = 2;

	rotate(nums, k);

	assertEquals(nums, [3, 99, -1, -100]);
});
