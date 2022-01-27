/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
	const m = grid.length,
		n = grid[0].length;
	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) {
			if (!i && !j) continue;
			grid[i][j] += !i
				? grid[i][j - 1]
				: !j
				? grid[i - 1][j]
				: Math.min(grid[i][j - 1], grid[i - 1][j]);
		}
	return grid[m - 1][n - 1];
};
