import { assertEquals } from "jsr:@std/assert";
import { ListNode } from "../types/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function hasCycle(head: ListNode | null): boolean {
	const visitedNodes = new Set<ListNode>();

	let node: ListNode;

	if (head) {
		node = head;
		visitedNodes.add(node);

		while (node.next) {
			node = node.next;

			if (visitedNodes.has(node)) return true;
			else visitedNodes.add(node);
		}
	}

	return false;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const head = [3, 2, 0, -4];
	const pos = 1;

	const root = new ListNode(head[0]);
	let node: ListNode;
	let last: ListNode;

	node = root;

	for (let i = 1; i < head.length; i++) {
		node.next = new ListNode(head[i]);
		node = node.next!;
	}

	last = node;
	node = root;

	for (let i = 0; i < pos; i++) {
		node = node.next!;
	}

	last.next = node;

	assertEquals(hasCycle(root), true);
});

Deno.test("Case 2", () => {
	const head = [1, 2];
	const pos = 0;

	const root = new ListNode(head[0]);
	let node: ListNode;
	let last: ListNode;

	node = root;

	for (let i = 1; i < head.length; i++) {
		node.next = new ListNode(head[i]);
		node = node.next!;
	}

	last = node;
	node = root;

	for (let i = 0; i < pos; i++) {
		node = node.next!;
	}

	last.next = node;

	assertEquals(hasCycle(root), true);
});

Deno.test("Case 3", () => {
	const head = [1];
	const pos = -1;

	const root = new ListNode(head[0]);
	let node: ListNode;
	let last: ListNode;

	node = root;

	for (let i = 1; i < head.length; i++) {
		node.next = new ListNode(head[i]);
		node = node.next!;
	}

	last = node;
	node = root;

	for (let i = 0; i < pos; i++) {
		node = node.next!;
	}

	if (pos >= 0) last.next = node;

	assertEquals(hasCycle(root), false);
});

Deno.test("Case 4", () => {
	const head = [1, 2];
	const pos = -1;

	const root = new ListNode(head[0]);
	let node: ListNode;
	let last: ListNode;

	node = root;

	for (let i = 1; i < head.length; i++) {
		node.next = new ListNode(head[i]);
		node = node.next!;
	}

	last = node;
	node = root;

	for (let i = 0; i < pos; i++) {
		node = node.next!;
	}

	if (pos >= 0) last.next = node;

	assertEquals(hasCycle(root), false);
});
