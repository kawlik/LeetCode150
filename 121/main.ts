import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxProfit(prices: number[]): number {
	let index = 1;
	let price = prices[0];
	let profit = 0;

	while (index < prices.length) {
		// desc
		while (prices[index] <= prices[index - 1]) index++;

		price = Math.min(price, prices[index - 1]);

		// asc
		while (prices[index] >= prices[index - 1]) index++;

		profit = Math.max(profit, prices[index - 1] - price);
	}

	return profit;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 5);
});

Deno.test("Case 2", () => {
	assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);
});

Deno.test("Case 3", () => {
	assertEquals(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]), 9);
});
