/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
	const m = grid.length,
		n = grid[0].length,
		dp = {};

	const check = (i, j) => i > -1 && i < n && j > -1 && j < n;

	const dfs = (row, r1, r2) => {
		if (row == m) return 0;
		let key = `${row},${r1},${r2}`;
		if (dp[key]) return dp[key];

		let cherries = grid[row][r1] + (r1 != r2 ? grid[row][r2] : 0),
			nextRow = 0;
		for (let i = -1; i < 2; i++)
			for (let j = -1; j < 2; j++)
				if (check(r1 + i, r2 + j))
					nextRow = Math.max(nextRow, dfs(row + 1, r1 + i, r2 + j));
		cherries += nextRow;
		dp[key] = cherries;
		return cherries;
	};
	console.log(dfs(0, 0, n - 1), dp);
	return dfs(0, 0, n - 1);
};

cherryPickup([
	[3, 1, 1],
	[2, 5, 1],
	[1, 5, 5],
	[2, 1, 1],
]);
