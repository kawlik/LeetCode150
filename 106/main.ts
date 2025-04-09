import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	if (postorder.length === 0) return null;
	if (postorder.length === 1) return new TreeNode(postorder[0]);

	let counter = postorder.length;

	const mapIndex = new Map<number, number>(inorder.map((value, index) => [value, index]));
	const dfsBuild = (p: number, q: number): TreeNode | null => {
		if (p > q) return null;

		const rootValue = postorder.at(--counter)!;
		const rootIndex = mapIndex.get(rootValue)!;

		const tree = new TreeNode(rootValue);
		tree.right = dfsBuild(rootIndex + 1, q);
		tree.left = dfsBuild(p, rootIndex - 1);

		return tree;
	};

	return dfsBuild(0, postorder.length - 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const inorder = [9, 3, 15, 20, 7];
	const postorder = [9, 15, 7, 20, 3];
	const output = fromArray([3, 9, 20, null, null, 15, 7]);

	assertEquals(JSON.stringify(buildTree(inorder, postorder)), JSON.stringify(output));
});

Deno.test("Case 2", () => {
	const inorder = [-1];
	const postorder = [-1];
	const output = fromArray([-1]);

	assertEquals(JSON.stringify(buildTree(inorder, postorder)), JSON.stringify(output));
});
