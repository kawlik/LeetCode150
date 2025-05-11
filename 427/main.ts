import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class _Node {
	val: boolean;
	isLeaf: boolean;
	topLeft: _Node | null;
	topRight: _Node | null;
	bottomLeft: _Node | null;
	bottomRight: _Node | null;
	constructor(
		val?: boolean,
		isLeaf?: boolean,
		topLeft?: _Node,
		topRight?: _Node,
		bottomLeft?: _Node,
		bottomRight?: _Node,
	) {
		this.val = val === undefined ? false : val;
		this.isLeaf = isLeaf === undefined ? false : isLeaf;
		this.topLeft = topLeft === undefined ? null : topLeft;
		this.topRight = topRight === undefined ? null : topRight;
		this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
		this.bottomRight = bottomRight === undefined ? null : bottomRight;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function construct(grid: number[][]): _Node | null {
	const root = new _Node(false, false);

	const isFinal = (size: number, x: number, y: number): boolean => {
		for (let dx = 0; dx < size; dx++) {
			for (let dy = 0; dy < size; dy++) {
				if (grid[x + dx][y + dy] !== grid[x][y]) return false;
			}
		}

		return true;
	};

	const dfs = (node: _Node, size: number, x: number, y: number): void => {
		if (isFinal(size, x, y)) {
			node.val = Boolean(grid[x][y]);
			node.isLeaf = true;
		} else {
			node.topLeft = new _Node(false, false);
			node.topRight = new _Node(false, false);
			node.bottomLeft = new _Node(false, false);
			node.bottomRight = new _Node(false, false);

			const half = size >> 1;
			const _x = x + half;
			const _y = y + half;

			dfs(node.topLeft, half, x, y);
			dfs(node.topRight, half, x, _y);
			dfs(node.bottomLeft, half, _x, y);
			dfs(node.bottomRight, half, _x, _y);
		}
	};

	dfs(root, grid.length, 0, 0);

	return root;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

// tested only on LeetCode
