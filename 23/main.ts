import { assertEquals } from "jsr:@std/assert";
import { ListNode } from "../types/list-node.ts";
import { fromArray } from "../utils/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function merge2Lists(p_lt: ListNode | null, q_lt: ListNode | null): ListNode | null {
	let root = new ListNode(NaN);
	let node = root;

	while (p_lt && q_lt) {
		if (p_lt.val < q_lt.val) {
			node.next = p_lt;
			node = node.next;
			p_lt = p_lt.next;
		} else {
			node.next = q_lt;
			node = node.next;
			q_lt = q_lt.next;
		}
	}

	if (p_lt) node.next = p_lt;
	if (q_lt) node.next = q_lt;

	return root.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	if (lists.length === 0) return null;

	while (lists.length >= 2) {
		const p_lt = lists.pop()!;
		const q_lt = lists.pop()!;

		lists.push(merge2Lists(p_lt, q_lt));
	}

	return lists[0];
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const lists = [
		fromArray([1, 4, 5]),
		fromArray([1, 3, 4]),
		fromArray([2, 6]),
	];

	assertEquals(
		JSON.stringify(mergeKLists(lists)),
		JSON.stringify(fromArray([1, 1, 2, 3, 4, 4, 5, 6])),
	);
});

Deno.test("Case 2", () => {
	const lists = <(ListNode | null)[]> [];

	assertEquals(JSON.stringify(mergeKLists(lists)), JSON.stringify(fromArray([])));
});

Deno.test("Case 3", () => {
	const lists = [fromArray([])];

	assertEquals(JSON.stringify(mergeKLists(lists)), JSON.stringify(fromArray([])));
});
