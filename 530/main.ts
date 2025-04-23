import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function getMinimumDifference(root: TreeNode | null): number {
	let prev = null as TreeNode | null;
	let diff = Infinity;

	const dfs = (node: TreeNode | null): void => {
		if (!node) return;

		dfs(node.left);

		if (prev) diff = Math.min(diff, Math.abs(prev.val - node.val));

		prev = node;

		dfs(node.right);
	};

	dfs(root);

	return diff;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([4, 2, 6, 1, 3]);

	assertEquals(getMinimumDifference(root), 1);
});

Deno.test("Case 2", () => {
	const root = fromArray([1, 0, 48, null, null, 12, 49]);

	assertEquals(getMinimumDifference(root), 1);
});
