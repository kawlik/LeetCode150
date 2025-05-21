import { assertEquals } from "jsr:@std/assert";
import { MaxHeap } from "../utils/heap.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function findMaximizedCapital(
	k: number,
	w: number,
	profits: number[],
	capital: number[],
): number {
	const length = capital.length;
	const queue = new MaxHeap();

	const data = capital
		.map((value, index) => [value, profits[index]])
		.sort(([p], [q]) => p - q);

	let currentCapital = w;
	let currentIndex = 0;
	let currentSize = 0;

	while (--k >= 0) {
		while (currentIndex < data.length && data[currentIndex][0] <= currentCapital) {
			queue.push(data[currentIndex][1]);
			currentIndex++;
			currentSize++;
		}

		if (currentSize === 0) return currentCapital;

		currentCapital += queue.pop();
		currentSize--;
	}

	return currentCapital;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]), 4);
});

Deno.test("Case 2", () => {
	assertEquals(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]), 6);
});

Deno.test("Case 3", () => {
	assertEquals(findMaximizedCapital(10, 0, [1, 2, 3], [0, 1, 2]), 6);
});
