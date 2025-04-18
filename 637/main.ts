import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function averageOfLevels(root: TreeNode | null): number[] {
	const levels: [num: number, sum: number][] = [];

	const dfs = (node: TreeNode | null, depth = 0): void => {
		if (!node) return;

		if (levels[depth]) {
			levels[depth][0] += 1;
			levels[depth][1] += node.val;
		} else {
			levels.push([1, node.val]);
		}

		dfs(node.left, depth + 1);
		dfs(node.right, depth + 1);
	};

	dfs(root);

	return levels.map(([num, sum]) => sum / num);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([3, 9, 20, null, null, 15, 7]);
	const out = [3.00000, 14.50000, 11.00000];

	assertEquals(averageOfLevels(root), out);
});

Deno.test("Case 2", () => {
	const root = fromArray([3, 9, 20, 15, 7]);
	const out = [3.00000, 14.50000, 11.00000];

	assertEquals(averageOfLevels(root), out);
});
