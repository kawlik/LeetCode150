import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxProfit(prices: number[]): number {
	let firstBuy = -prices[0];
	let firstSell = 0;

	let secondBuy = -prices[0];
	let secondSell = 0;

	for (let i = 1; i < prices.length; i++) {
		firstBuy = Math.max(firstBuy, -prices[i]);
		firstSell = Math.max(firstSell, firstBuy + prices[i]);

		secondBuy = Math.max(secondBuy, firstSell - prices[i]);
		secondSell = Math.max(secondSell, secondBuy + prices[i]);
	}

	return secondSell;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]), 6);
});

Deno.test("Case 2", () => {
	assertEquals(maxProfit([1, 2, 3, 4, 5]), 4);
});

Deno.test("Case 3", () => {
	assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);
});
