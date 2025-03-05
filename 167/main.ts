import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function twoSum(numbers: number[], target: number): number[] {
	let p = 0;
	let q = numbers.length - 1;

	while (numbers[p] + numbers[q] !== target) {
		if (numbers[p] + numbers[q] > target) q--;
		if (numbers[p] + numbers[q] < target) p++;
	}

	return [p + 1, q + 1];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(twoSum([2, 7, 11, 15], 9), [1, 2]);
});

Deno.test("Case 2", () => {
	assertEquals(twoSum([2, 3, 4], 6), [1, 3]);
});

Deno.test("Case 3", () => {
	assertEquals(twoSum([-1, 0], -1), [1, 2]);
});
