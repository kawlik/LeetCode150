import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function isValidBST(root: TreeNode | null): boolean {
	let isValid = true;
	let prev = -Infinity;

	const iot = (node: TreeNode | null): void => {
		if (!node || !isValid) return;

		iot(node.left);

		if (node.val <= prev) isValid = false;

		prev = node.val;

		iot(node.right);
	};

	iot(root);

	return isValid;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([2, 1, 3]);

	assertEquals(isValidBST(root), true);
});

Deno.test("Case 2", () => {
	const root = fromArray([5, 1, 4, null, null, 3, 6]);

	assertEquals(isValidBST(root), false);
});
