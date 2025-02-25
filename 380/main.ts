import { assert, assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class RandomizedSet {
	private set: Set<number>;

	constructor() {
		this.set = new Set();
	}

	insert(val: number): boolean {
		if (this.set.has(val)) {
			return false;
		} else {
			this.set.add(val);
			return true;
		}
	}

	remove(val: number): boolean {
		if (this.set.has(val)) {
			this.set.delete(val);
			return true;
		} else {
			return false;
		}
	}

	getRandom(): number {
		const rnd = Math.floor(Math.random() * this.set.size);
		const val = [...this.set][rnd];

		return val;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const set = new RandomizedSet();

	assertEquals(set.insert(1), true);
	assertEquals(set.remove(2), false);
	assertEquals(set.insert(2), true);

	assert(() => {
		const rnd = set.getRandom();

		if (rnd === 1) return true;
		if (rnd === 2) return true;

		return false;
	});

	assertEquals(set.remove(1), true);
	assertEquals(set.insert(2), false);

	assert(() => {
		const rnd = set.getRandom();

		if (rnd === 2) return true;

		return false;
	});
});
