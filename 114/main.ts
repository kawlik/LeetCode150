import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function flatten(root: TreeNode | null): void {
	const preOrder: TreeNode[] = [];

	const dfs = (node: TreeNode | null): void => {
		if (!node) return;

		preOrder.push(node);

		dfs(node.left);
		dfs(node.right);

		node.left = null;
		node.right = null;
	};

	dfs(root);

	for (let i = 1; i < preOrder.length; i++) {
		preOrder[i - 1].right = preOrder[i];
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

// tested only on LeetCode
