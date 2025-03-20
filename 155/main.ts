import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

class MinStack {
	private stack_val: number[];
	private stack_min: number[];

	constructor() {
		this.stack_val = [];
		this.stack_min = [Infinity];
	}

	push(val: number): void {
		this.stack_val.push(val);

		if (this.stack_min.at(-1)! >= val) {
			this.stack_min.push(val);
		}
	}

	pop(): void {
		const val = this.stack_val.pop()!;

		if (this.stack_min.at(-1)! === val) {
			this.stack_min.pop();
		}
	}

	top(): number {
		return this.stack_val.at(-1)!;
	}

	getMin(): number {
		return this.stack_min.at(-1)!;
	}
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const obj = new MinStack();

	obj.push(-2);
	obj.push(0);
	obj.push(-3);

	assertEquals(obj.getMin(), -3);

	obj.pop();

	assertEquals(obj.top(), 0);
	assertEquals(obj.getMin(), -2);
});
