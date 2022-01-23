/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
	let max = 0;
	const m = grid.length,
		n = grid[0].length;

	const dfs = (i, j) => {
		if (i < 0 || j < 0 || i == m || j == n || !grid[i][j]) return 0;
		const tmp = grid[i][j];
		grid[i][j] = 0;
		const cur =
			tmp +
			Math.max(dfs(i, j + 1), dfs(i, j - 1), dfs(i + 1, j), dfs(i - 1, j));

		grid[i][j] = tmp;
		return cur;
	};

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) max = Math.max(max, dfs(i, j));

	return max;
};

console.log(
	getMaximumGold([
		[0, 6, 0],
		[5, 8, 7],
		[0, 9, 0],
	])
);
