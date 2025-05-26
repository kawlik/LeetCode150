import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function coinChange(coins: number[], amount: number): number {
	const change = new Array<number>(amount + 1).fill(-1);

	change[0] = 0;

	for (let i = 1; i <= amount; i++) {
		if (change[i] !== -1) continue;

		for (const coin of coins) {
			if (coin > i) continue;

			if (coin === i) {
				change[i] = 1;
			} else if (change[i] === -1) {
				if (change[i - coin] !== -1) {
					change[i] = 1 + change[i - coin];
				}
			} else if (change[i] !== -1) {
				if (change[i - coin] !== -1) {
					change[i] = Math.min(1 + change[i - coin], change[i]);
				}
			}
		}
	}

	return change[amount];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(coinChange([1, 2, 5], 11), 3);
});

Deno.test("Case 2", () => {
	assertEquals(coinChange([2], 3), -1);
});

Deno.test("Case 3", () => {
	assertEquals(coinChange([1], 0), 0);
});
