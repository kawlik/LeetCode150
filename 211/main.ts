import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class Node {
	constructor(
		public children = new Map<string, Node>(),
		public terminal = false,
	) {}
}

class WordDictionary {
	constructor(
		private root = new Node(),
	) {}

	addWord(word: string): void {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			if (!node.children.has(word[i])) node.children.set(word[i], new Node());
			node = node.children.get(word[i])!;
		}

		node.terminal = true;
	}

	search(word: string): boolean {
		const queue: [node: Node, idx: number][] = [[this.root, 0]];

		while (queue.length) {
			const [node, idx] = queue.shift()!;

			if (idx === word.length && node.terminal) {
				return true;
			} else if (word[idx] === ".") {
				node.children.forEach((next) => queue.push([next, idx + 1]));
			} else if (node.children.has(word[idx])) {
				queue.push([node.children.get(word[idx])!, idx + 1]);
			}
		}

		return false;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const dict = new WordDictionary();

	dict.addWord("bad");
	dict.addWord("dad");
	dict.addWord("mad");

	assertEquals(dict.search("pad"), false);
	assertEquals(dict.search("bad"), true);
	assertEquals(dict.search(".ad"), true);
	assertEquals(dict.search("b.."), true);
});
