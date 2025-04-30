import { assertArrayIncludes } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class TrieNode {
	static form(words: string[]): TrieNode {
		const root = new TrieNode();

		for (const word of words) {
			let node = root;

			for (const char of word) {
				if (node.next[char] === undefined) {
					node.next[char] = new TrieNode();
				}

				node = node.next[char];
			}

			node.word = word;
		}

		return root;
	}

	constructor(
		public next = {} as { [char: string]: TrieNode },
		public word = "",
	) {}
}

function findWords(board: string[][], words: string[]): string[] {
	const trie = TrieNode.form(words);
	const list = new Set<string>();

	const M = board.length;
	const N = board[0].length;

	const dfs = (m: number, n: number, node: TrieNode): void => {
		if (m < 0 || m >= M) return;
		if (n < 0 || n >= N) return;

		const char = board[m][n];

		if (!node.next[char]) return;
		if (node.next[char].word) list.add(node.next[char].word);

		board[m][n] = "#";

		dfs(m - 1, n, node.next[char]);
		dfs(m + 1, n, node.next[char]);
		dfs(m, n + 1, node.next[char]);
		dfs(m, n - 1, node.next[char]);

		board[m][n] = char;
	};

	for (let m = 0; m < M; m++) {
		for (let n = 0; n < N; n++) {
			dfs(m, n, trie);
		}
	}

	return Array.from(list);
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const words = ["oath", "pea", "eat", "rain"];
	const board = [
		["o", "a", "a", "n"],
		["e", "t", "a", "e"],
		["i", "h", "k", "r"],
		["i", "f", "l", "v"],
	];

	assertArrayIncludes(findWords(board, words), ["eat", "oath"]);
});

Deno.test("Case 2", () => {
	const words = ["abcb"];
	const board = [["a", "b"], ["c", "d"]];

	assertArrayIncludes(findWords(board, words), []);
});
