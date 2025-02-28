import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function candy(ratings: number[]): number {
	const candies = ratings.map(() => 1);

	// left -> right
	for (let i = 1; i < ratings.length; i++) {
		if (ratings[i] > ratings[i - 1]) {
			candies[i] = candies[i - 1] + 1;
		}
	}

	// right -> left
	for (let i = ratings.length - 2; i >= 0; i--) {
		if (ratings[i] > ratings[i + 1]) {
			candies[i] = Math.max(candies[i], candies[i + 1] + 1);
		}
	}

	return candies.reduce((p, q) => p + q, 0);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(candy([1, 0, 2]), 5);
});

Deno.test("Case 2", () => {
	assertEquals(candy([1, 2, 2]), 4);
});
