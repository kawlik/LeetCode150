import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let l = m + n;

	// merge
	while (n > 0 && m > 0) {
		if (nums1[m - 1] < nums2[n - 1]) {
			nums1[l - 1] = nums2[n - 1];
			l--;
			n--;
		} else {
			nums1[l - 1] = nums1[m - 1];
			l--;
			m--;
		}
	}

	// leftovers
	while (n > 0) {
		nums1[l - 1] = nums2[n - 1];
		l--;
		n--;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const nums1: number[] = [1, 2, 3, 0, 0, 0];
	const nums2: number[] = [2, 5, 6];

	const m = 3;
	const n = 3;

	merge(nums1, m, nums2, n);

	assertEquals(nums1, [1, 2, 2, 3, 5, 6]);
});

Deno.test("Case 2", () => {
	const nums1: number[] = [1];
	const nums2: number[] = [];

	const m = 1;
	const n = 0;

	merge(nums1, m, nums2, n);

	assertEquals(nums1, [1]);
});

Deno.test("Case 3", () => {
	const nums1: number[] = [0];
	const nums2: number[] = [1];

	const m = 0;
	const n = 1;

	merge(nums1, m, nums2, n);

	assertEquals(nums1, [1]);
});
