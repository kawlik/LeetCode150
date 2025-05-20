abstract class Heap {
	constructor(
		private cmpf: (a: number, b: number) => number,
		private heap: number[] = [],
	) {}

	// public api
	/*   *   *   *   *   *   *   *   */

	peak(): number {
		return Number(this.heap[0]);
	}

	pop(): number {
		const head = this.heap[0];
		const tail = this.heap.pop()!;

		if (this.heap.length) {
			this.heap[0] = tail;
			this.heapifyDown(0);
		}

		return Number(head);
	}

	push(value: number): void {
		this.heap.push(value);
		this.heapifyUp(this.heap.length - 1);
	}

	swap(index1: number, index2: number): void {
		[this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
	}

	// private utils
	/*   *   *   *   *   *   *   *   */

	private getLeftIndex(index: number): number {
		return (index << 1) + 1;
	}

	private getRightIndex(index: number): number {
		return (index << 1) + 2;
	}

	private getParentIndex(index: number): number {
		return (index - 1) >> 1;
	}

	private heapifyUp(index: number): void {
		let currentIndex = index;
		let parentIndex = this.getParentIndex(currentIndex);

		while (
			currentIndex > 0 && this.cmpf(this.heap[parentIndex], this.heap[currentIndex]) > 0
		) {
			this.swap(parentIndex, currentIndex);
			currentIndex = parentIndex;
			parentIndex = this.getParentIndex(currentIndex);
		}
	}

	private heapifyDown(index: number): void {
		let currentIndex = index;
		const leftIndex = this.getLeftIndex(currentIndex);
		const rightIndex = this.getRightIndex(currentIndex);

		if (
			leftIndex < this.heap.length &&
			this.cmpf(this.heap[currentIndex], this.heap[leftIndex]) > 0
		) {
			currentIndex = leftIndex;
		}

		if (
			rightIndex < this.heap.length &&
			this.cmpf(this.heap[currentIndex], this.heap[rightIndex]) > 0
		) {
			currentIndex = rightIndex;
		}

		if (currentIndex === index) return;

		this.swap(index, currentIndex);
		this.heapifyDown(currentIndex);
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

export class MaxHeap extends Heap {
	constructor() {
		super((a, b) => Math.sign(b - a));
	}
}

export class MinHeap extends Heap {
	constructor() {
		super((a, b) => Math.sign(a - b));
	}
}
