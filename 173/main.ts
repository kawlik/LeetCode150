import { assertEquals } from "jsr:@std/assert";
import { fromArray } from "../utils/tree-node.ts";
import { TreeNode } from "../types/tree-node.ts";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class BSTIterator {
	private stack: TreeNode[] = [];
	private head: TreeNode | null;
	private curr: TreeNode | null;

	constructor(root: TreeNode | null) {
		this.head = root;
		this.curr = root;
	}

	next(): number {
		this.forward();

		return this.curr!.val;
	}

	hasNext(): boolean {
		return Boolean(this.head || this.stack.length);
	}

	private forward(): void {
		while (this.head) {
			this.stack.push(this.head);
			this.head = this.head.left;
		}

		this.head = this.stack.pop()!;
		this.curr = this.head;
		this.head = this.head.right;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const root = fromArray([7, 3, 15, null, null, 9, 20]);
	const bsti = new BSTIterator(root);

	assertEquals(bsti.next(), 3);
	assertEquals(bsti.next(), 7);
	assertEquals(bsti.hasNext(), true);

	assertEquals(bsti.next(), 9);
	assertEquals(bsti.hasNext(), true);

	assertEquals(bsti.next(), 15);
	assertEquals(bsti.hasNext(), true);

	assertEquals(bsti.next(), 20);
	assertEquals(bsti.hasNext(), false);
});

Deno.test("Case 2", () => {
	const root = fromArray([3, 1, 4, null, 2]);
	const bsti = new BSTIterator(root);

	assertEquals(bsti.hasNext(), true);
	assertEquals(bsti.next(), 1);

	assertEquals(bsti.hasNext(), true);
	assertEquals(bsti.next(), 2);

	assertEquals(bsti.hasNext(), true);
	assertEquals(bsti.next(), 3);

	assertEquals(bsti.hasNext(), true);
	assertEquals(bsti.next(), 4);

	assertEquals(bsti.hasNext(), false);
});
