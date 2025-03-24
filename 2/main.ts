import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class ListNode {
	static fromArray(array: number[]): ListNode {
		let head: ListNode | null = new ListNode();
		let tail: ListNode | null = head;

		while (array.length) {
			tail.val = array.shift()!;
			tail.next = new ListNode();

			if (array.length) tail = tail?.next;
		}

		tail.next = null;

		return head;
	}

	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let node1: ListNode | null = l1;
	let node2: ListNode | null = l2;

	let head: ListNode | null = new ListNode();
	let tail: ListNode | null = head;

	while (node1 || node2) {
		tail.val = (node1?.val || 0) + (node2?.val || 0);

		if (node1) node1 = node1?.next;
		if (node2) node2 = node2?.next;

		if (node1 || node2) {
			tail.next = new ListNode();
			tail = tail?.next;
		}
	}

	tail = head;

	while (tail) {
		if (tail.val >= 10) {
			tail.val %= 10;

			if (tail.next) {
				tail.next.val++;
			} else {
				tail.next = new ListNode(1);
			}
		}

		tail = tail.next;
	}

	return head;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const l1 = ListNode.fromArray([2, 4, 3]);
	const l2 = ListNode.fromArray([5, 6, 4]);
	const out = ListNode.fromArray([7, 0, 8]);

	assertEquals(JSON.stringify(addTwoNumbers(l1, l2)), JSON.stringify(out));
});

Deno.test("Case 2", () => {
	const l1 = ListNode.fromArray([0]);
	const l2 = ListNode.fromArray([0]);
	const out = ListNode.fromArray([0]);

	assertEquals(JSON.stringify(addTwoNumbers(l1, l2)), JSON.stringify(out));
});

Deno.test("Case 3", () => {
	const l1 = ListNode.fromArray([9, 9, 9, 9, 9, 9, 9]);
	const l2 = ListNode.fromArray([9, 9, 9, 9]);
	const out = ListNode.fromArray([8, 9, 9, 9, 0, 0, 0, 1]);

	assertEquals(JSON.stringify(addTwoNumbers(l1, l2)), JSON.stringify(out));
});

Deno.test("Case 4", () => {
	const l1 = ListNode.fromArray([2, 4, 9]);
	const l2 = ListNode.fromArray([5, 6, 4, 9]);
	const out = ListNode.fromArray([7, 0, 4, 0, 1]);

	assertEquals(JSON.stringify(addTwoNumbers(l1, l2)), JSON.stringify(out));
});
