import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function maxDepth(root: TreeNode | null): number {
	let maxDepth = 0;

	const dfs = (node: TreeNode | null, depth: number): void => {
		if (node === null) return;

		maxDepth = Math.max(maxDepth, ++depth);

		dfs(node.left, depth);
		dfs(node.right, depth);
	};

	dfs(root, 0);

	return maxDepth;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([3, 9, 20, null, null, 15, 7]);

	assertEquals(maxDepth(root), 3);
});

Deno.test("Case 2", () => {
	const root = fromArray([1, null, 2]);

	assertEquals(maxDepth(root), 2);
});
