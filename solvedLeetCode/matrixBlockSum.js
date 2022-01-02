/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
	const m = mat.length,
		n = mat[0].length;
	const dp = Array(m + 1)
			.fill()
			.map(() => Array(n + 1).fill(0)),
		res = Array(m)
			.fill()
			.map(() => Array(n).fill(0));

	for (let r = 1; r < m + 1; r++)
		for (let c = 1; c < n + 1; c++)
			dp[r][c] =
				mat[r - 1][c - 1] - dp[r - 1][c - 1] + dp[r - 1][c] + dp[r][c - 1];
	let x1, y1, x2, y2;
	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) {
			//mat x,y => dp x+1,y+1
			x1 = Math.max(0, i - k);
			y1 = Math.max(0, j - k);
			x2 = Math.min(m, i + k + 1);
			y2 = Math.min(n, j + k + 1);
			res[i][j] = dp[x2][y2] - dp[x2][y1] - dp[x1][y2] + dp[x1][y1];
		}
	return res;
};
