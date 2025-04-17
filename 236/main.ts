import { assertEquals } from "jsr:@std/assert";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null,
): TreeNode | null {
	const search = (node: TreeNode | null): TreeNode | null => {
		if (!node) return null;

		if (node === p) return node;
		if (node === q) return node;

		const left = search(node.left);
		const right = search(node.right);

		if (left && right) return node;
		else return left || right;
	};

	return search(root);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

// tested only on LeetCode
