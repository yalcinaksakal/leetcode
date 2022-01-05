/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	path = path.split("/");
	let i = 0;
	let dir = [];

	while (i < path.length) {
		if (path[i] !== "" && path[i] !== ".")
			path[i] === ".." ? dir.pop() : dir.push(path[i]);
		i++;
	}

	if (!dir.length) return "/";

	return dir.reduce((acc, cur) => acc + "/" + cur, "");
};
console.log(simplifyPath("/a/./b/../../c/"));
