import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
	const order: number[][] = [];

	const dfs = (node: TreeNode | null, depth = 0): void => {
		if (!node) return;

		if (!order[depth]) order[depth] = [];

		if (depth & 1) {
			order[depth].unshift(node.val);
		} else {
			order[depth].push(node.val);
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

	assertEquals(zigzagLevelOrder(root), [[3], [20, 9], [15, 7]]);
});

Deno.test("Case 2", () => {
	const root = fromArray([1]);

	assertEquals(zigzagLevelOrder(root), [[1]]);
});

Deno.test("Case 3", () => {
	const root = fromArray([]);

	assertEquals(zigzagLevelOrder(root), []);
});
