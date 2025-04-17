import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function countNodes(root: TreeNode | null): number {
	let nodesCount = 0;

	const dfs = (node: TreeNode): void => {
		nodesCount++;

		if (node.left) dfs(node.left);
		if (node.right) dfs(node.right);
	};

	if (root) dfs(root);

	return nodesCount;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([1, 2, 3, 4, 5, 6]);

	assertEquals(countNodes(root), 6);
});

Deno.test("Case 2", () => {
	const root = fromArray([]);

	assertEquals(countNodes(root), 0);
});

Deno.test("Case 3", () => {
	const root = fromArray([1]);

	assertEquals(countNodes(root), 1);
});
