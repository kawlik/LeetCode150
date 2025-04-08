import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isSymmetric(root: TreeNode | null): boolean {
	let isSymmetric = true;

	const dfs = (p: TreeNode | null, q: TreeNode | null): void => {
		if (!isSymmetric) return;

		if (p === null) return void (isSymmetric = q === null);
		if (q === null) return void (isSymmetric = p === null);

		if (p.val === q.val) {
			dfs(p.left, q.right);
			dfs(p.right, q.left);
		} else {
			isSymmetric = false;
		}
	};

	if (root) dfs(root.left, root.right);

	return isSymmetric;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([1, 2, 2, 3, 4, 4, 3]);

	assertEquals(isSymmetric(root), true);
});

Deno.test("Case 2", () => {
	const root = fromArray([1, 2, 2, null, 3, null, 3]);

	assertEquals(isSymmetric(root), false);
});
