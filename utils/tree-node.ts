import { TreeNode } from "../types/tree-node.ts";

export function fromArray(array: (number | null)[]): TreeNode | null {
	const nodes = array.map((value) => value === null ? null : new TreeNode(value));

	let i = 0;

	for (const node of nodes) {
		if (node === null) continue;

		if (i + 1 < nodes.length) node.left = nodes[i + 1];
		if (i + 2 < nodes.length) node.right = nodes[i + 2];

		if ((i += 2) >= nodes.length) break;
	}

	return nodes[0] || null;
}
