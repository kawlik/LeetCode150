import { assertEquals } from "jsr:@std/assert";
import { MinHeap } from "../utils/heap.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function findKthLargest(nums: number[], k: number): number {
	const heap = new MinHeap();

	for (let i = 0; i < k; i++) heap.push(nums[i]);

	for (let i = k; i < nums.length; i++) {
		if (nums[i] > heap.peak()) {
			heap.pop();
			heap.push(nums[i]);
		}
	}

	return heap.peak();
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);
});

Deno.test("Case 2", () => {
	assertEquals(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
});

Deno.test("Case 3", () => {
	assertEquals(findKthLargest([-1, 2, 0], 1), 2);
});
