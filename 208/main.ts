import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class Node {
	constructor(
		public children = new Map<string, Node>(),
		public terminal = false,
	) {}
}

class Trie {
	constructor(private root: Node = new Node()) {}

	insert(word: string): void {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			if (!node.children.has(word[i])) node.children.set(word[i], new Node());
			node = node.children.get(word[i])!;
		}

		node.terminal = true;
	}

	search(word: string): boolean {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			if (!node.children.has(word[i])) return false;
			node = node.children.get(word[i])!;
		}

		return node.terminal;
	}

	startsWith(prefix: string): boolean {
		let node = this.root;

		for (let i = 0; i < prefix.length; i++) {
			if (!node.children.has(prefix[i])) return false;
			node = node.children.get(prefix[i])!;
		}

		return true;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const trie = new Trie();

	trie.insert("apple");

	assertEquals(trie.search("apple"), true);
	assertEquals(trie.search("app"), false);

	assertEquals(trie.startsWith("app"), true);

	trie.insert("app");

	assertEquals(trie.search("app"), true);
});
