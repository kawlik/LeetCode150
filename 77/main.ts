import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function combine(n: number, k: number): number[][] {
	const combine: number[][] = [];

	const find = (i: number, acc: number[]): void => {
		if (acc.length === k) {
			combine.push([...acc]);
		} else {
			for (let j = i + 1; j <= n; j++) {
				acc.push(j);
				find(j, acc);
				acc.pop();
			}
		}
	};

	for (let i = 1; i <= n; i++) {
		find(i, [i]);
	}

	return combine;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(combine(4, 2), [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]);
});

Deno.test("Case 2", () => {
	assertEquals(combine(1, 1), [[1]]);
});
