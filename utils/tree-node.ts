import { TreeNode } from "../types/tree-node.ts";

export function fromArray(array: (number | null)[]): TreeNode | null {
	const nodes = array.map((value) => value === null ? null : new TreeNode(value));

	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i] === null) continue;

		if (nodes[2 * i + 1]) nodes[i]!.left = nodes[2 * i + 1];
		if (nodes[2 * i + 2]) nodes[i]!.right = nodes[2 * i + 2];
	}

	return nodes[0] || null;
}
