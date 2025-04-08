import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	let isSameTree = true;

	const dfs = (p_node: TreeNode | null, q_node: TreeNode | null): void => {
		if (!isSameTree) return;

		if (p_node === null) return void (isSameTree = q_node === null);
		if (q_node === null) return void (isSameTree = p_node === null);

		if (p_node.val === q_node.val) {
			dfs(p_node.left, q_node.left);
			dfs(p_node.right, q_node.right);
		} else {
			isSameTree = false;
		}
	};

	dfs(p, q);

	return isSameTree;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const p = fromArray([1, 2, 3]);
	const q = fromArray([1, 2, 3]);

	assertEquals(isSameTree(p, q), true);
});

Deno.test("Case 2", () => {
	const p = fromArray([1, 2]);
	const q = fromArray([1, null, 2]);

	assertEquals(isSameTree(p, q), false);
});

Deno.test("Case 3", () => {
	const p = fromArray([1, 2, 1]);
	const q = fromArray([1, 1, 2]);

	assertEquals(isSameTree(p, q), false);
});
