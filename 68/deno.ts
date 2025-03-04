import { assertEquals } from "@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function fullJustify(words: string[], maxWidth: number): string[] {
	const lines = [words[0]];

	for (let i = 1; i < words.length; i++) {
		if (lines[lines.length - 1].length + words[i].length < maxWidth) {
			lines[lines.length - 1] += " " + words[i];
		} else {
			lines.push(words[i]);
		}
	}

	for (let i = 0; i < lines.length - 1; i++) {
		const lineFragments = lines[i].split(" ");
		const lineRawLength = lineFragments.reduce((p, q) => p + q.length, 0);

		if (lineFragments.length >= 2) {
			let spacesLeft = maxWidth - lineRawLength;
			let currentIdx = 0;

			while (spacesLeft > 0) {
				lineFragments[currentIdx] += " ";

				spacesLeft -= 1;
				currentIdx += 1;
				currentIdx %= lineFragments.length - 1;
			}

			lines[i] = lineFragments.join("");
		} else {
			lines[i] = lines[i].concat(" ".repeat(maxWidth));
			lines[i] = lines[i].substring(0, maxWidth);
		}
	}

	lines[lines.length - 1] = lines[lines.length - 1].concat(" ".repeat(maxWidth));
	lines[lines.length - 1] = lines[lines.length - 1].substring(0, maxWidth);

	return lines;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(
		fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16),
		[
			"This    is    an",
			"example  of text",
			"justification.  ",
		],
	);
});

Deno.test("Case 2", () => {
	assertEquals(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16), [
		"What   must   be",
		"acknowledgment  ",
		"shall be        ",
	]);
});

Deno.test("Case 3", () => {
	assertEquals(
		fullJustify([
			"Science",
			"is",
			"what",
			"we",
			"understand",
			"well",
			"enough",
			"to",
			"explain",
			"to",
			"a",
			"computer.",
			"Art",
			"is",
			"everything",
			"else",
			"we",
			"do",
		], 20),
		[
			"Science  is  what we",
			"understand      well",
			"enough to explain to",
			"a  computer.  Art is",
			"everything  else  we",
			"do                  ",
		],
	);
});
