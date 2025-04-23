import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function levelOrder(root: TreeNode | null): number[][] {
	if (!root) return [];

	const queue: [node: TreeNode, depth: number][] = [[root, 0]];
	const order: number[][] = [];

	while (queue.length) {
		const [node, depth] = queue.shift()!;

		if (order[depth]) {
			order[depth].push(node.val);
		} else {
			order[depth] = [node.val];
		}

		if (node.left) queue.push([node.left, depth + 1]);
		if (node.right) queue.push([node.right, depth + 1]);
	}

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
