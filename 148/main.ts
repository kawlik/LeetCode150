import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/list-node.ts";
import { ListNode } from "../types/list-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function sortList(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;

	const split = (head: ListNode | null, size: number): (ListNode | null)[] => {
		if (!head?.next) return [head, null];

		let prev: ListNode | null = null;
		let tail: ListNode | null = head;

		for (let i = 0; i < size >> 1; i++) {
			prev = tail;
			tail = tail!.next;
		}

		prev!.next = null;

		return [head, tail];
	};

	const merge = (p_lt: ListNode | null, q_lt: ListNode | null): ListNode | null => {
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

		while (p_lt) {
			node.next = p_lt;
			node = node.next;
			p_lt = p_lt.next;
		}

		while (q_lt) {
			node.next = q_lt;
			node = node.next;
			q_lt = q_lt.next;
		}

		return root.next;
	};

	let size = 1;
	let node = head as ListNode | null;

	while (node?.next && (node = node.next)) size++;

	const dfs = (head: ListNode | null, size: number): ListNode | null => {
		const l1 = size >> 1;
		const l2 = size - l1;

		let [p_lt, q_lt] = split(head, size);

		if (l1 > 1) p_lt = dfs(p_lt, l1);
		if (l2 > 1) q_lt = dfs(q_lt, l2);

		return merge(p_lt, q_lt);
	};

	return dfs(head, size);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const input = fromArray([4, 2, 1, 3]);
	const output = fromArray([1, 2, 3, 4]);

	assertEquals(JSON.stringify(sortList(input)), JSON.stringify(output));
});

Deno.test("Case 2", () => {
	const input = fromArray([-1, 5, 3, 4, 0]);
	const output = fromArray([-1, 0, 3, 4, 5]);

	assertEquals(JSON.stringify(sortList(input)), JSON.stringify(output));
});

Deno.test("Case 3", () => {
	const input = fromArray([]);
	const output = fromArray([]);

	assertEquals(JSON.stringify(sortList(input)), JSON.stringify(output));
});
