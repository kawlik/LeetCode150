import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
	const enum State {
		UNVISITED = 0,
		VISITING = 1,
		VISITED = 2,
	}

	const graph: number[][] = Array.from({ length: numCourses }, () => []);
	const state: number[] = Array.from({ length: numCourses }, () => State.UNVISITED);

	for (const [u, v] of prerequisites) {
		graph[u].push(v);
	}

	const hasCycles = (course: number): boolean => {
		if (state[course] === State.VISITING) return true;
		if (state[course] === State.VISITED) return false;

		state[course] = State.VISITING;

		for (const prerequisite of graph[course]) {
			if (hasCycles(prerequisite)) return true;
		}

		state[course] = State.VISITED;

		return false;
	};

	for (let i = 0; i < numCourses; i++) {
		if (state[i] === State.UNVISITED && hasCycles(i)) return [];
	}

	const result: number[] = [];
	const queue: number[] = [];

	for (let i = 0; i < numCourses; i++) {
		if (graph[i]) {
			queue.push(i);
		} else {
			result.push(i);
		}
	}

	const queued = new Set(queue);

	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			if (graph[queue[i]].every((prerequisite) => !queued.has(prerequisite))) {
				result.push(queue[i]);
				queued.delete(queue[i]);
				queue.splice(i, 1);
			}
		}
	}

	return result;
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(findOrder(2, [[1, 0]]), [0, 1]);
});

Deno.test("Case 2", () => {
	assertEquals(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]), [0, 2, 1, 3]);
});

Deno.test("Case 3", () => {
	assertEquals(findOrder(1, []), [0]);
});
