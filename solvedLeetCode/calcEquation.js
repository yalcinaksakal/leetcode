/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (e, val, q) {
	const v = {};
	let x, y;

	for (let i = 0; i < e.length; i++) {
		x = e[i][0];
		y = e[i][1];
		if (!v[x]) v[x] = {};
		if (!v[y]) v[y] = {};
		v[x][y] = val[i];
		v[y][x] = 1 / val[i];
	}
	const res = [];
	let visited;
	const dfs = (x, y) => {
		if (visited[x]) return false;
		if (v[x][y] != undefined) return v[x][y];
		visited[x] = 1;
		let result;
		for (const z of Object.keys(v[x])) {
			result = dfs(z, y);
			if (result) return result * v[x][z];
		}
		visited[x] = 0;
		return false;
	};

	for (const [x, y] of q)
		if (!v[x] || !v[y]) res.push(-1);
		else {
			visited = {};
			const ratio = dfs(x, y);
			res.push(ratio ? ratio : -1);
		}

	return res;
};
calcEquation(
	[
		["x1", "x2"],
		["x2", "x3"],
		["x3", "x4"],
		["x4", "x5"],
	],
	[3.0, 4.0, 5.0, 6.0],
	[
		["x1", "x5"],
		["x5", "x2"],
		["x2", "x4"],
		["x2", "x2"],
		["x2", "x9"],
		["x9", "x9"],
	]
);
