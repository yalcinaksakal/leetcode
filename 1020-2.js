/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
	let count = 0;
	const m = grid.length - 1,
		n = grid[0].length - 1,
		visit = (i, j) => {
			if (!grid[i] || !grid[i][j]) return;
			grid[i][j] = 0;
			visit(i + 1, j);
			visit(i - 1, j);
			visit(i, j + 1);
			visit(i, j - 1);
		};
	//mark visitable nodes from borders
	for (let i = 0; i <= m; i++) {
		visit(i, 0);
		visit(i, n);
	}
	for (let i = 1; i < n; i++) {
		visit(0, i);
		visit(m, i);
	}
	//count
	for (let i = 1; i < m; i++) for (let j = 1; j < n; j++) grid[i][j] && count++;
	return count;
};
numEnclaves([
	[0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
	[1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
	[0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
	[0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
	[0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
	[0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
	[0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
	[0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
]);
