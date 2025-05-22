import { assertEquals } from "jsr:@std/assert";
import { MinHeap } from "../utils/heap.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
	if (nums1.length === 0) return [];
	if (nums2.length === 0) return [];

	const pairs = new Map<number, [i: number, j: number][]>();
	const queue = new MinHeap();

	for (let i = 0; i < Math.min(k, nums1.length); i++) {
		const sum = nums1[i] + nums2[0];

		if (pairs.has(sum)) {
			pairs.get(sum)!.push([i, 0]);
		} else {
			pairs.set(sum, [[i, 0]]);
		}

		queue.push(sum);
	}

	const results = <[i: number, j: number][]> [];

	while (results.length < k && queue.size()) {
		const sum = queue.poll();
		const [i, j] = pairs.get(sum)!.shift()!;

		results.push([nums1[i], nums2[j]]);

		const k = j + 1;

		if (k < nums2.length) {
			const sum = nums1[i] + nums2[k];

			queue.push(sum);

			if (pairs.has(sum)) {
				pairs.get(sum)!.push([i, k]);
			} else {
				pairs.set(sum, [[i, k]]);
			}
		}
	}

	return results;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(kSmallestPairs([1, 7, 11], [2, 4, 6], 3), [[1, 2], [1, 4], [1, 6]]);
});

Deno.test("Case 2", () => {
	assertEquals(kSmallestPairs([1, 1, 2], [1, 2, 3], 2), [[1, 1], [1, 1]]);
});
