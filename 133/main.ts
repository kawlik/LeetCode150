import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class _Node {
	val: number;
	neighbors: _Node[];

	constructor(val?: number, neighbors?: _Node[]) {
		this.val = val === undefined ? 0 : val;
		this.neighbors = neighbors === undefined ? [] : neighbors;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function cloneGraph(node: _Node | null): _Node | null {
	if (!node) return null;

	const visited = new Map<_Node, _Node>();

	const clone = (node: _Node | null): _Node | null => {
		if (!node) return null;

		if (visited.has(node)) return visited.get(node)!;

		const cloned = new _Node(node.val);

		visited.set(node, cloned);

		for (const neighbour of node.neighbors) {
			cloned.neighbors.push(clone(neighbour)!);
		}

		return cloned;
	};

	return clone(node);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

// tested only on LeetCode
