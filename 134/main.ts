import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function canCompleteCircuit(gas: number[], cost: number[]): number {
	const totalGasAvailable = gas.reduce((p, q) => p + q);
	const totalTravelCost = cost.reduce((p, q) => p + q);

	if (totalTravelCost > totalGasAvailable) return -1;

	let gasTank = 0;
	let station = 0;

	for (let i = 0; i < gas.length; i++) {
		gasTank += gas[i] - cost[i];

		if (gasTank < 0) {
			gasTank = 0;
			station = i + 1;
		}
	}

	return station;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	const gas = [1, 2, 3, 4, 5];
	const cost = [3, 4, 5, 1, 2];

	assertEquals(canCompleteCircuit(gas, cost), 3);
});

Deno.test("Case 2", () => {
	const gas = [2, 3, 4];
	const cost = [3, 4, 3];

	assertEquals(canCompleteCircuit(gas, cost), -1);
});
