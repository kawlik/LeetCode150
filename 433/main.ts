import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function minMutation(startGene: string, endGene: string, bank: string[]): number {
	if (!bank.length || !bank.includes(endGene)) return -1;

	const GENE_LENGTH = 8;

	const isValidMutation = (geneA: string, geneB: string): boolean => {
		let mutationsCount = 0;

		for (let i = 0; i < GENE_LENGTH; i++) {
			if (geneA[i] !== geneB[i]) { if (++mutationsCount >= 2) break; }
		}

		return mutationsCount === 1;
	};

	if (isValidMutation(startGene, endGene)) return 1;

	bank.push(startGene, endGene);

	const graph: { [gene: string]: string[] } = {};

	for (const gene of bank) {
		graph[gene] = [];
	}

	for (let i = 0; i < bank.length; i++) {
		for (let j = i + 1; j < bank.length; j++) {
			if (isValidMutation(bank[i], bank[j])) {
				graph[bank[i]].push(bank[j]);
				graph[bank[j]].push(bank[i]);
			}
		}
	}

	const checked = new Set<string>([startGene]);
	const queue: [gene: string, epoch: number][] = [[startGene, 0]];

	while (queue.length) {
		const [gene, epoch] = queue.shift()!;

		if (gene === endGene) return epoch;

		for (const mutation of graph[gene]) {
			if (checked.has(mutation)) continue;

			queue.push([mutation, epoch + 1]);
			checked.add(mutation);
		}
	}

	return -1;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const startGene = "AACCGGTT";
	const endGene = "AACCGGTA";
	const bank = ["AACCGGTA"];

	assertEquals(minMutation(startGene, endGene, bank), 1);
});

Deno.test("Case 2", () => {
	const startGene = "AACCGGTT";
	const endGene = "AAACGGTA";
	const bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"];

	assertEquals(minMutation(startGene, endGene, bank), 2);
});
