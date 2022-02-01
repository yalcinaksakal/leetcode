/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
	const rowMax = grid.map(r => Math.max(...r)),
		colMax = [],
		m = grid.length,
		n = grid[0].length;
	let max;
	for (let j = 0; j < n; j++) {
		max = grid[0][j];
		for (let i = 0; i < m; i++) max = Math.max(max, grid[i][j]);
		colMax.push(max);
	}
	let res = 0;
	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++)
			res += Math.min(rowMax[i], colMax[j]) - grid[i][j];
	return res;
};
