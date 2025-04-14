import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class _Node {
	val: number;
	left: _Node | null;
	right: _Node | null;
	next: _Node | null;

	constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
		this.next = next === undefined ? null : next;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function connect(root: _Node | null): _Node | null {
	if (!root) return null;

	let main_queue: _Node[] = [root];
	let temp_queue: _Node[] = [];

	while (main_queue.length) {
		const curr_node = main_queue.shift()!;

		if (curr_node.left) temp_queue.push(curr_node.left);
		if (curr_node.right) temp_queue.push(curr_node.right);

		if (main_queue.length) {
			curr_node.next = main_queue[0];
		} else {
			curr_node.next = null;
			main_queue = temp_queue;
			temp_queue = [];
		}
	}

	return root;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

// tested only on LeetCode
