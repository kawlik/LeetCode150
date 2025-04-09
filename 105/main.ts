import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	if (preorder.length === 0) return null;
	if (preorder.length === 1) return new TreeNode(preorder[0]);

	let counter = 0;

	const mapIndex = new Map<number, number>(inorder.map((value, index) => [value, index]));
	const dfsBuild = (p: number, q: number): TreeNode | null => {
		if (p > q) return null;

		const rootValue = preorder[counter++];
		const rootIndex = mapIndex.get(rootValue)!;

		const tree = new TreeNode(rootValue);
		tree.left = dfsBuild(p, rootIndex - 1);
		tree.right = dfsBuild(rootIndex + 1, q);

		return tree;
	};

	return dfsBuild(0, preorder.length - 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const preorder = [3, 9, 20, 15, 7];
	const inorder = [9, 3, 15, 20, 7];
	const output = fromArray([3, 9, 20, null, null, 15, 7]);

	assertEquals(JSON.stringify(buildTree(preorder, inorder)), JSON.stringify(output));
});

Deno.test("Case 2", () => {
	const preorder = [-1];
	const inorder = [-1];
	const output = fromArray([-1]);

	assertEquals(JSON.stringify(buildTree(preorder, inorder)), JSON.stringify(output));
});
