import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class Node {
	constructor(
		public key: number = NaN,
		public val: number = NaN,
		public prev: Node | null = null,
		public next: Node | null = null,
	) {}
}

class List {
	readonly head: Node;
	readonly tail: Node;

	constructor() {
		this.head = new Node();
		this.tail = new Node();

		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	push(node: Node): void {
		const next = this.head.next!;

		this.head.next = node;
		node.prev = this.head;
		node.next = next;
		next.prev = node;
	}

	sewe(node: Node): void {
		const next = node.next!;
		const prev = node.prev!;

		prev.next = next;
		next.prev = prev;
	}

	shift(): Node | null {
		if (!this.tail.prev?.prev) return null;

		const node = this.tail.prev;
		const prev = this.tail.prev.prev;

		prev.next = this.tail;
		this.tail.prev = prev;

		return node;
	}
}

class LRUCache {
	private keys: Map<number, Node>;
	private list: List;
	private size: number;

	constructor(readonly capacity: number) {
		this.keys = new Map();
		this.list = new List();
		this.size = 0;
	}

	get(key: number): number {
		const node = this.keys.get(key);

		if (node) {
			this.list.sewe(node);
			this.list.push(node);
			return node.val;
		} else {
			return -1;
		}
	}

	put(key: number, value: number): void {
		const node = this.keys.get(key);
		const next = new Node(key, value);

		if (node) {
			this.list.sewe(node);
			this.list.push(next);
			this.keys.set(key, next);
		} else {
			this.list.push(next);
			this.keys.set(key, next);
			this.size++;
		}

		if (this.size > this.capacity) {
			this.size = this.capacity;

			const tail = this.list.shift();

			if (tail) this.keys.delete(tail.key);
		}
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const cache = new LRUCache(2);

	cache.put(1, 1);
	cache.put(2, 2);

	assertEquals(cache.get(1), 1);

	cache.put(3, 3);

	assertEquals(cache.get(2), -1);

	cache.put(4, 4);

	assertEquals(cache.get(1), -1);
	assertEquals(cache.get(3), 3);
	assertEquals(cache.get(4), 4);
});
