import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (!root) return false;

	const dfsSum = (node: TreeNode | null, currentSum = 0): boolean => {
		if (!node) return false;

		if (!node.left && !node.right) {
			return targetSum === node.val + currentSum;
		} else {
			return [
				dfsSum(node.left, currentSum + node.val),
				dfsSum(node.right, currentSum + node.val),
			].some((b) => b);
		}
	};

	return dfsSum(root);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);

	assertEquals(hasPathSum(root, 22), true);
});

Deno.test("Case 2", () => {
	const root = fromArray([1, 2, 3]);

	assertEquals(hasPathSum(root, 5), false);
});

Deno.test("Case 3", () => {
	const root = fromArray([]);

	assertEquals(hasPathSum(root, 0), false);
});

Deno.test("Case 4", () => {
	const root = fromArray([1, 2]);

	assertEquals(hasPathSum(root, 1), false);
});
