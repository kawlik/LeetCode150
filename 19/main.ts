import { assertEquals } from "jsr:@std/assert";
import { ListNode } from "../types/list-node.ts";
import { fromArray } from "../utils/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	const root = new ListNode(0, head);

	let currentNode: ListNode | null = root;
	let listLength = 0;

	while ((currentNode = currentNode.next)) listLength++;

	currentNode = root;

	for (let i = 0; i < listLength - n; i++) {
		currentNode = currentNode!.next;
	}

	currentNode!.next = currentNode!.next!.next || null;

	return root.next;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const head = fromArray([1, 2, 3, 4, 5]);
	const out = fromArray([1, 2, 3, 5]);
	const n = 2;

	assertEquals(JSON.stringify(removeNthFromEnd(head, n)), JSON.stringify(out));
});

Deno.test("Case 2", () => {
	const head = fromArray([1]);
	const out = fromArray([]);
	const n = 1;

	assertEquals(JSON.stringify(removeNthFromEnd(head, n)), JSON.stringify(out));
});

Deno.test("Case 3", () => {
	const head = fromArray([1, 2]);
	const out = fromArray([1]);
	const n = 1;

	assertEquals(JSON.stringify(removeNthFromEnd(head, n)), JSON.stringify(out));
});
