import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/list-node.ts";
import { ListNode } from "../types/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function partition(head: ListNode | null, x: number): ListNode | null {
	let root: ListNode | null = new ListNode(NaN, head);
	let last: ListNode | null = root;

	while (last?.next && last.next?.val < x) last = last.next;

	let prev: ListNode | null = last;
	let curr: ListNode | null = last.next;

	while (curr) {
		if (curr.val < x) {
			const tmpA = last.next;
			const tmpB = curr.next;

			last.next = curr;
			curr.next = tmpA;
			prev.next = tmpB;

			last = last!.next;
			curr = tmpB;
		} else {
			prev = curr;
			curr = curr.next;
		}
	}

	return root.next;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const head = fromArray([1, 4, 3, 2, 5, 2]);
	const out = fromArray([1, 2, 2, 4, 3, 5]);
	const x = 3;

	assertEquals(JSON.stringify(partition(head, x)), JSON.stringify(out));
});

Deno.test("Case 2", () => {
	const head = fromArray([2, 1]);
	const out = fromArray([1, 2]);
	const x = 2;

	assertEquals(JSON.stringify(partition(head, x)), JSON.stringify(out));
});

Deno.test("Case 3", () => {
	const head = fromArray([1, 4, 3, 0, 2, 5, 2]);
	const out = fromArray([1, 0, 2, 2, 4, 3, 5]);
	const x = 3;

	assertEquals(JSON.stringify(partition(head, x)), JSON.stringify(out));
});
