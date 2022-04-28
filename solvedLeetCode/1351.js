/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
	let i = grid.length - 1,
		j = grid[0].length - 1,
		k = 0,
		count = 0;

	while (i > -1 && grid[i][j] < 0) {
		while (j >= k && grid[i][j--] < 0) count++;
		k = j;
		j = grid[0].length - 1;
		i--;
	}
	return count;
};
countNegatives([
	[4, 3, 2, -1],
	[3, 2, 1, -1],
	[1, 1, -1, -2],
	[-1, -1, -2, -3],
]);
