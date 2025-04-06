import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/list-node.ts";
import { ListNode } from "../types/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
	const getKth = (from: ListNode | null): ListNode | null => {
		let node = from;

		for (let i = 0; i < k && node; i++) node = node.next;

		return node;
	};

	const root = new ListNode(0, head);

	let groupPrev: ListNode | null = root;
	let groupNext: ListNode | null = null;

	while (true) {
		const tail = getKth(groupPrev);

		if (!tail) break;

		groupNext = tail.next;

		let prev: ListNode | null = tail.next;
		let curr: ListNode | null = groupPrev!.next;
		let next: ListNode | null = null;

		while (curr !== groupNext) {
			next = curr!.next;
			curr!.next = prev;
			prev = curr;
			curr = next;
		}

		next = groupPrev!.next;
		groupPrev!.next = tail;
		groupPrev = next;
	}

	return root.next;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const head = fromArray([1, 2, 3, 4, 5]);
	const out = fromArray([2, 1, 4, 3, 5]);
	const k = 2;

	assertEquals(JSON.stringify(reverseKGroup(head, k)), JSON.stringify(out));
});

Deno.test("Case 2", () => {
	const head = fromArray([1, 2, 3, 4, 5]);
	const out = fromArray([3, 2, 1, 4, 5]);
	const k = 3;

	assertEquals(JSON.stringify(reverseKGroup(head, k)), JSON.stringify(out));
});
