import { assertEquals } from "jsr:@std/assert";
import { ListNode } from "../types/list-node.ts";
import { fromArray } from "../utils/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
	let root = new ListNode(0, head);
	let prev = root;

	for (let i = 0; i < left - 1; i++) prev = prev.next!;

	let curr = prev.next!;
	let tail = curr.next!;

	for (let i = 0; i < right - left; i++) {
		tail = curr.next!;

		curr.next = tail.next;
		tail.next = prev.next;
		prev.next = tail;
	}

	return root.next;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const head = fromArray([1, 2, 3, 4, 5]);
	const left = 2;
	const right = 4;

	assertEquals(
		JSON.stringify(reverseBetween(head, left, right)),
		JSON.stringify(fromArray([1, 4, 3, 2, 5])),
	);
});

Deno.test("Case 2", () => {
	const head = fromArray([5]);
	const left = 1;
	const right = 1;

	assertEquals(
		JSON.stringify(reverseBetween(head, left, right)),
		JSON.stringify(fromArray([5])),
	);
});
