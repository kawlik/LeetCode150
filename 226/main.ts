import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function invertTree(root: TreeNode | null): TreeNode | null {
	const dfs = (node: TreeNode | null): void => {
		if (node === null) return;

		[node.left, node.right] = [node.right, node.left];

		dfs(node.left);
		dfs(node.right);
	};

	dfs(root);

	return root;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([4, 2, 7, 1, 3, 6, 9]);
	const out = fromArray([4, 7, 2, 9, 6, 3, 1]);

	assertEquals(JSON.stringify(invertTree(root)), JSON.stringify(out));
});

Deno.test("Case 2", () => {
	const root = fromArray([2, 1, 3]);
	const out = fromArray([2, 3, 1]);

	assertEquals(JSON.stringify(invertTree(root)), JSON.stringify(out));
});

Deno.test("Case 3", () => {
	const root = fromArray([]);
	const out = fromArray([]);

	assertEquals(JSON.stringify(invertTree(root)), JSON.stringify(out));
});
