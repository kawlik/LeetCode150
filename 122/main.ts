import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxProfit(prices: number[]): number {
	let index = 0;
	let total = 0;

	while (index < prices.length - 1) {
		// desc
		while (prices[index] >= prices[index + 1]) index++;

		const price_1 = prices[index];

		// asc
		while (prices[index] <= prices[index + 1]) index++;

		const price_2 = prices[index];

		total += price_2 - price_1;
	}

	return total;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 7);
});

Deno.test("Case 2", () => {
	assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);
});

Deno.test("Case 3", () => {
	assertEquals(maxProfit([1, 2, 3, 4, 5]), 4);
});
