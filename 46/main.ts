import { assertArrayIncludes } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function permute(nums: number[]): number[][] {
	const ans: number[][] = [];

	const next = (idx: number): void => {
		if (idx === nums.length) return void (ans.push([...nums]));

		for (let i = idx; i < nums.length; i++) {
			[nums[idx], nums[i]] = [nums[i], nums[idx]];
			next(idx + 1);
			[nums[idx], nums[i]] = [nums[i], nums[idx]];
		}
	};

	next(0);

	return ans;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertArrayIncludes(
		permute([1, 2, 3]),
		[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]],
	);
});

Deno.test("Case 2", () => {
	assertArrayIncludes(permute([0, 1]), [[0, 1], [1, 0]]);
});

Deno.test("Case 3", () => {
	assertArrayIncludes(permute([1]), [[1]]);
});
