/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
	const n = grid.length,
		memo = {
			[n - 1 + "," + (n - 1) + "," + (n - 1) + "," + (n - 1)]:
				grid[n - 1][n - 1],
		},
		dfs = (x1 = 0, y1 = 0, x2 = 0, y2 = 0) => {
			if (
				x1 === n ||
				x2 === n ||
				y1 === n ||
				y2 === n ||
				grid[x1][y1] === -1 ||
				grid[x2][y2] === -1
			)
				return -1;

			const key = x1 + "," + y1 + "," + x2 + "," + y2;
			if (memo[key] !== undefined) return memo[key];

			memo[key] = Math.max(
				dfs(x1 + 1, y1, x2 + 1, y2),
				dfs(x1 + 1, y1, x2, y2 + 1),
				dfs(x1, y1 + 1, x2 + 1, y2),
				dfs(x1, y1 + 1, x2, y2 + 1)
			);

			if (memo[key] !== -1)
				memo[key] +=
					x1 === x2 && y1 === y2 ? grid[x1][y1] : grid[x1][y1] + grid[x2][y2];

			return memo[key];
		},
		res = dfs();

	return res === -1 ? 0 : res;
};
