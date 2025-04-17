import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxPathSum(root: TreeNode | null): number {
	let maxPathSum = root!.val;

	const dfsSum = (node: TreeNode | null): number => {
		if (!node) return -Infinity;

		if (!node.left && !node.right) return node.val;

		const leftBranch = dfsSum(node.left);
		const rightBranch = dfsSum(node.right);

		maxPathSum = Math.max(
			maxPathSum,
			node.val,
			node.val + leftBranch,
			node.val + rightBranch,
			node.val + leftBranch + rightBranch,
			leftBranch,
			rightBranch,
		);

		return Math.max(node.val, node.val + leftBranch, node.val + rightBranch);
	};

	dfsSum(root);

	return maxPathSum;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([1, 2, 3]);

	assertEquals(maxPathSum(root), 6);
});

Deno.test("Case 2", () => {
	const root = fromArray([-10, 9, 20, null, null, 15, 7]);

	assertEquals(maxPathSum(root), 42);
});

Deno.test("Case 3", () => {
	const root = fromArray([0]);

	assertEquals(maxPathSum(root), 0);
});

Deno.test("Case 4", () => {
	const root = fromArray([-2, -1]);

	assertEquals(maxPathSum(root), -1);
});

Deno.test("Case 5", () => {
	const root = fromArray([1, 2, null, 3, null, 4, null, 5]);

	assertEquals(maxPathSum(root), 15);
});
