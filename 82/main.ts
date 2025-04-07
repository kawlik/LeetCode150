import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/list-node.ts";
import { ListNode } from "../types/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function deleteDuplicates(head: ListNode | null): ListNode | null {
	const root = new ListNode(NaN, head);

	let prevNode: ListNode | null = root;
	let currNode: ListNode | null = root.next;
	let nextNode: ListNode | null = null;

	while (currNode) {
		nextNode = currNode.next;

		if (nextNode?.val === currNode.val) {
			const removeVal = currNode.val;

			while (currNode?.val === removeVal) currNode = currNode?.next;

			prevNode.next = currNode;
		} else {
			prevNode = currNode;
			currNode = nextNode;
		}
	}

	return root.next;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const head = fromArray([1, 2, 3, 3, 4, 4, 5]);
	const out = fromArray([1, 2, 5]);

	assertEquals(JSON.stringify(deleteDuplicates(head)), JSON.stringify(out));
});

Deno.test("Case 2", () => {
	const head = fromArray([1, 1, 1, 2, 3]);
	const out = fromArray([2, 3]);

	assertEquals(JSON.stringify(deleteDuplicates(head)), JSON.stringify(out));
});
