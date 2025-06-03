import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxProfit(k: number, prices: number[]): number {
	const HOLD = 0;
	const SELL = 1;

	const profit: [hold: number, sell: number][] = Array.from({ length: k + 1 }, () => [0, 0]);

	for (let i = 1; i <= k; i++) profit[i][HOLD] = -prices[0];

	for (let i = 1; i < prices.length; i++) {
		for (let j = k; j > 0; j--) {
			const holdPrice = profit[j - 1][SELL] - prices[i];
			const sellPrice = profit[j][HOLD] + prices[i];

			profit[j][HOLD] = Math.max(profit[j][HOLD], holdPrice);
			profit[j][SELL] = Math.max(profit[j][SELL], sellPrice);
		}
	}

	return profit[k][SELL];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(maxProfit(2, [2, 4, 1]), 2);
});

Deno.test("Case 2", () => {
	assertEquals(maxProfit(2, [3, 2, 6, 5, 0, 3]), 7);
});
