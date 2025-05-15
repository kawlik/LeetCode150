import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const M = nums1.length;
	const N = nums2.length;

	let p1 = 0;
	let p2 = 0;

	const step = (): number => {
		if (p1 < M && p2 < N) {
			return nums1[p1] > nums2[p2] ? nums2[p2++] : nums1[p1++];
		} else if (p1 < M) {
			return nums1[p1++];
		} else if (p2 < N) {
			return nums2[p2++];
		} else {
			return NaN;
		}
	};

	if (M + N & 1) {
		for (let i = 0; i < (M + N) >> 1; i++) {
			step();
		}

		return step();
	} else {
		for (let i = 1; i < (M + N) >> 1; i++) {
			step();
		}

		return (step() + step()) * 0.5;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(findMedianSortedArrays([1, 3], [2]), 2.00000);
});

Deno.test("Case 2", () => {
	assertEquals(findMedianSortedArrays([1, 2], [3, 4]), 2.50000);
});
