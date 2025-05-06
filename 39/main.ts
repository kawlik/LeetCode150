import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function combinationSum(candidates: number[], target: number): number[][] {
	const combinations: number[][] = [];

	candidates.sort((p, q) => p - q);

	const find = (acc: number[], idx: number, sum: number) => {
		if (sum === target) return void (combinations.push([...acc]));

		for (let i = idx; i < candidates.length; i++) {
			if (sum + candidates[i] > target) continue;

			acc.push(candidates[i]);
			find(acc, i, sum + candidates[i]);
			acc.pop();
		}
	};

	for (let i = 0; i < candidates.length; i++) {
		find([candidates[i]], i, candidates[i]);
	}

	return combinations;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);
});

Deno.test("Case 2", () => {
	assertEquals(combinationSum([2, 3, 5], 8), [[2, 2, 2, 2], [2, 3, 3], [3, 5]]);
});

Deno.test("Case 3", () => {
	assertEquals(combinationSum([2], 1), []);
});
