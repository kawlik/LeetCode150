import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function rightSideView(root: TreeNode | null): number[] {
	const rightSideVals: number[] = [];

	const rightSideDFS = (node: TreeNode | null, depth = 0): void => {
		if (!node) return;

		if (!Number.isInteger(rightSideVals[depth])) rightSideVals.push(node.val);

		rightSideDFS(node.right, depth + 1);
		rightSideDFS(node.left, depth + 1);
	};

	rightSideDFS(root);

	return rightSideVals;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([1, 2, 3, null, 5, null, 4]);
	const out = [1, 3, 4];

	assertEquals(rightSideView(root), out);
});

Deno.test("Case 2", () => {
	const root = fromArray([1, 2, 3, 4, null, null, null, 5]);
	const out = [1, 3, 4, 5];

	assertEquals(rightSideView(root), out);
});

Deno.test("Case 3", () => {
	const root = fromArray([1, null, 3]);
	const out = [1, 3];

	assertEquals(rightSideView(root), out);
});

Deno.test("Case 4", () => {
	const root = fromArray([]);
	const out = [] as number[];

	assertEquals(rightSideView(root), out);
});

Deno.test("Case 5", () => {
	const root = fromArray([1, 2, 0]);
	const out = [1, 0];

	assertEquals(rightSideView(root), out);
});
