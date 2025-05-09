import { assertEquals } from "jsr:@std/assert";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function sortedArrayToBST(nums: number[]): TreeNode | null {
	const toBST = (p: number, q: number): TreeNode | null => {
		if (p > q) return null;

		const o = (p + q) >> 1;
		const r = new TreeNode(nums[o]);

		r.left = toBST(p, o - 1);
		r.right = toBST(o + 1, q);

		return r;
	};

	return toBST(0, nums.length - 1);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

// tested only on LeetCode
