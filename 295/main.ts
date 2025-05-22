import { assertEquals } from "jsr:@std/assert";
import { MaxHeap, MinHeap } from "../utils/heap.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class MedianFinder {
	private maximize: MaxHeap;
	private minimize: MinHeap;

	constructor() {
		this.maximize = new MaxHeap();
		this.minimize = new MinHeap();
	}

	addNum(num: number): void {
		if (this.minimize.size() < this.maximize.size()) {
			this.minimize.push(num);
		} else {
			this.maximize.push(num);
		}

		if (this.minimize.peak() < this.maximize.peak()) {
			const max = this.maximize.poll();
			const min = this.minimize.poll();

			this.maximize.push(min);
			this.minimize.push(max);
		}
	}

	findMedian(): number {
		if (this.minimize.size() < this.maximize.size()) {
			return this.maximize.peak();
		} else {
			return (this.maximize.peak() + this.minimize.peak()) * 0.5;
		}
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const obj = new MedianFinder();

	obj.addNum(1);
	obj.addNum(2);

	assertEquals(obj.findMedian(), 1.5);

	obj.addNum(3);

	assertEquals(obj.findMedian(), 2);
});
