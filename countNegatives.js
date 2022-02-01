/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
	const m = grid.length,
		n = grid[0].length;
	let i = 0,
		j = n - 1;
	let res = 0;
	while (i < m && j > -1)
		if (grid[i][j] < 0) j--;
		else {
			res += n - j - 1;
			i++;
		}
	if (j == -1) res += (m - i) * n;
	return res;
};

countNegatives([
	[4, 3, 2, -1],
	[3, 2, 1, -1],
	[-1, -1, -1, -2],
	[-1, -1, -2, -3],
]);
