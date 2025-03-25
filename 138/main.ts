import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class _Node {
	val: number;
	next: _Node | null;
	random: _Node | null;

	constructor(val?: number, next?: _Node, random?: _Node) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
		this.random = random === undefined ? null : random;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function copyRandomList(head: _Node | null): _Node | null {
	const originalNodes = new Map<_Node, number>();
	const duplicateNodes = new Map<number, _Node>();

	const list: _Node | null = head ? { val: NaN, next: null, random: null } : null;

	let tail1: _Node | null = head;
	let tail2: _Node | null = list;
	let index = 0;

	while (tail1 && tail2) {
		originalNodes.set(tail1, index);
		duplicateNodes.set(index, tail2);
		index++;

		tail2.val = tail1.val;
		tail2.next = { val: NaN, next: null, random: null };
		tail1 = tail1.next;

		if (tail1) {
			tail2 = tail2.next;
		}
	}

	if (tail2) tail2.next = null;

	tail1 = head;
	tail2 = list;

	while (tail1 && tail2) {
		if (tail1.random) {
			const random = originalNodes.get(tail1.random)!;
			tail2.random = duplicateNodes.get(random)!;
		}

		tail1 = tail1.next;
		tail2 = tail2.next;
	}

	return list;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

// tested only on LeetCode
