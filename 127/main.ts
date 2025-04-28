import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
	const areAadjacent = (wordA: string, wordB: string): boolean => {
		let numChanges = 0;

		for (let i = 0; i < wordA.length; i++) {
			if (wordA[i] !== wordB[i]) { if (++numChanges >= 2) break; }
		}

		return numChanges === 1;
	};

	wordList.push(beginWord);
	const graph: { [word: string]: string[] } = {};

	for (const word of wordList) {
		graph[word] = [];
	}

	if (!graph[endWord]) return 0;

	for (let i = 0; i < wordList.length; i++) {
		for (let j = i + 1; j < wordList.length; j++) {
			if (areAadjacent(wordList[i], wordList[j])) {
				graph[wordList[i]].push(wordList[j]);
				graph[wordList[j]].push(wordList[i]);
			}
		}
	}

	const checked = new Set<string>(beginWord);
	const queue: [word: string, epoch: number][] = [[beginWord, 1]];

	while (queue.length) {
		const [word, epoch] = queue.shift()!;

		if (word === endWord) return epoch;

		for (const next of graph[word]) {
			if (checked.has(next)) continue;

			queue.push([next, epoch + 1]);
			checked.add(next);
		}
	}

	return 0;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]), 5);
});

Deno.test("Case 2", () => {
	assertEquals(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]), 0);
});
