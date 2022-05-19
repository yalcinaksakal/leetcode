/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (mat) {
	const m = mat.length,
		n = mat[0].length,
		memo = {},
		dfs = (i, j, val) => {
			if (!mat[i] || j < 0 || j >= n || mat[i][j] <= val) return 0;
			const key = i + "," + j;
			!memo[key] &&
				(memo[key] =
					1 +
					Math.max(
						dfs(i, j + 1, mat[i][j]),
						dfs(i, j - 1, mat[i][j]),
						dfs(i + 1, j, mat[i][j]),
						dfs(i - 1, j, mat[i][j])
					));
			return memo[key];
		};
	let res = 1;
	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) res = Math.max(res, dfs(i, j, -1));
	return res;
};
longestIncreasingPath([
	[9, 9, 4],
	[6, 6, 8],
	[2, 1, 1],
]);
