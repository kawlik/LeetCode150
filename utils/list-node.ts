import { ListNode } from "../types/list-node.ts";

export function fromArray(array: number[]): ListNode | null {
	const nodes = array.map((value) => new ListNode(value));

	for (let i = 0; i < nodes.length - 1; i++) {
		nodes[i].next = nodes[i + 1];
	}

	return nodes[0] || null;
}
