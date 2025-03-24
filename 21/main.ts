import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/list-node.ts";
import { ListNode } from "../types/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
	if (!list1 && !list2) return null;

	let head: ListNode | null = new ListNode();
	let tail: ListNode | null = head;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			tail.val = list1.val;
			list1 = list1.next;
		} else {
			tail.val = list2.val;
			list2 = list2.next;
		}

		if (list1 || list2) {
			tail.next = new ListNode();
			tail = tail.next;
		}
	}

	while (list1) {
		tail.val = list1.val;
		list1 = list1.next;

		if (list1) {
			tail.next = new ListNode();
			tail = tail.next;
		}
	}

	while (list2) {
		tail.val = list2.val;
		list2 = list2.next;

		if (list2) {
			tail.next = new ListNode();
			tail = tail.next;
		}
	}

	return head;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const list1 = fromArray([1, 2, 4]);
	const list2 = fromArray([1, 3, 4]);
	const out = fromArray([1, 1, 2, 3, 4, 4]);

	assertEquals(JSON.stringify(mergeTwoLists(list1, list2)), JSON.stringify(out));
});

Deno.test("Case 2", () => {
	const list1 = fromArray([]);
	const list2 = fromArray([]);
	const out = fromArray([]);

	assertEquals(JSON.stringify(mergeTwoLists(list1, list2)), JSON.stringify(out));
});

Deno.test("Case 3", () => {
	const list1 = fromArray([]);
	const list2 = fromArray([0]);
	const out = fromArray([0]);

	assertEquals(JSON.stringify(mergeTwoLists(list1, list2)), JSON.stringify(out));
});
