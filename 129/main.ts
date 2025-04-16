import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function sumNumbers(root: TreeNode | null): number {
	let sumNumbers = 0;

	const dfsNum = (node: TreeNode | null, sum = 0): void => {
		if (!node) return;

		sum *= 10;
		sum += node.val;

		if (!node.left && !node.right) {
			sumNumbers += sum;
		} else {
			dfsNum(node.left, sum);
			dfsNum(node.right, sum);
		}
	};

	dfsNum(root);

	return sumNumbers;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([1, 2, 3]);

	assertEquals(sumNumbers(root), 25);
});

Deno.test("Case 2", () => {
	const root = fromArray([4, 9, 0, 5, 1]);

	assertEquals(sumNumbers(root), 1026);
});
