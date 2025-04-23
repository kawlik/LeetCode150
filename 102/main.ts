import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function levelOrder(root: TreeNode | null): number[][] {
	const order: number[][] = [];

	const dfs = (node: TreeNode | null, depth = 0): void => {
		if (!node) return;

		if (order[depth]) {
			order[depth].push(node.val);
		} else {
			order[depth] = [node.val];
		}

		dfs(node.left, depth + 1);
		dfs(node.right, depth + 1);
	};

	dfs(root);

	return order;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([3, 9, 20, null, null, 15, 7]);

	assertEquals(levelOrder(root), [[3], [9, 20], [15, 7]]);
});

Deno.test("Case 2", () => {
	const root = fromArray([1]);

	assertEquals(levelOrder(root), [[1]]);
});

Deno.test("Case 3", () => {
	const root = fromArray([]);

	assertEquals(levelOrder(root), []);
});
