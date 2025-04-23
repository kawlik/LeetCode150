import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function kthSmallest(root: TreeNode | null, k: number): number {
	let kthSmallest = NaN;

	const iot = (node: TreeNode | null): void => {
		if (!node) return;

		iot(node.left);

		if (--k === 0) return void (kthSmallest = node.val);

		iot(node.right);
	};

	iot(root);

	return kthSmallest;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([3, 1, 4, null, 2]);

	assertEquals(kthSmallest(root, 1), 1);
});

Deno.test("Case 2", () => {
	const root = fromArray([5, 3, 6, 2, 4, null, null, 1]);

	assertEquals(kthSmallest(root, 3), 3);
});
