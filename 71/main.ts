import { assertEquals } from "jsr:@std/assert";

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

function simplifyPath(path: string): string {
	const stack = path.split("/").filter((str) => (str !== "" && str !== "."));

	while (stack[0] === "..") stack.shift();

	let index = 0;

	while (index < stack.length - 1) {
		while (stack[0] === "..") stack.shift();

		if (stack[index + 1] === "..") {
			stack.splice(index, 2);
			index--;
		} else {
			index++;
		}
	}

	return "/".concat(stack.join("/"));
}

/*   *   *   *   *   *   *   *   *   *   */
/*   *   *   *   *   *   *   *   *   *   */

Deno.test("Case 1", () => {
	assertEquals(simplifyPath("/home/"), "/home");
});

Deno.test("Case 2", () => {
	assertEquals(simplifyPath("/home//foo/"), "/home/foo");
});

Deno.test("Case 3", () => {
	assertEquals(simplifyPath("/home/user/Documents/../Pictures"), "/home/user/Pictures");
});

Deno.test("Case 4", () => {
	assertEquals(simplifyPath("/../"), "/");
});

Deno.test("Case 5", () => {
	assertEquals(simplifyPath("/.../a/../b/c/../d/./"), "/.../b/d");
});

Deno.test("Case 6", () => {
	assertEquals(simplifyPath("/a/./b/../../c/"), "/c");
});

Deno.test("Case 7", () => {
	assertEquals(simplifyPath("/a/../../b/../c//.//"), "/c");
});
