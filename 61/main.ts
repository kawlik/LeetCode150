import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/list-node.ts";
import { ListNode } from "../types/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
	let root: ListNode | null = new ListNode(0, head);
	let prev: ListNode | null = null;
	let curr: ListNode | null = root;
	let size = 0;

	while (curr?.next) {
		curr = curr.next;
		size++;
	}

	k %= size;

	if (k === 0 || size === 0) return head;

	prev = null;
	curr = root;

	for (let i = 0; i <= size - k; i++) {
		prev = curr;
		curr = curr!.next;
	}

	prev!.next = null;
	root!.next = curr;

	while (curr?.next) curr = curr.next;

	curr!.next = head;

	return root.next;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const head = fromArray([1, 2, 3, 4, 5]);
	const out = fromArray([4, 5, 1, 2, 3]);
	const k = 2;

	assertEquals(JSON.stringify(rotateRight(head, k)), JSON.stringify(out));
});

Deno.test("Case 2", () => {
	const head = fromArray([0, 1, 2]);
	const out = fromArray([2, 0, 1]);
	const k = 4;

	assertEquals(JSON.stringify(rotateRight(head, k)), JSON.stringify(out));
});
