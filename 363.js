/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
	const m = matrix.length,
		n = matrix[0].length,
		dp = Array(m + 1)
			.fill()
			.map(() => Array(n + 1).fill(0)),
		getSumOfRectangle = (r1, c1, r2, c2) =>
			dp[r2 + 1][c2 + 1] - dp[r2 + 1][c1] - dp[r1][c2 + 1] + dp[r1][c1];
	let res = -(10 ** 7),
		recSum,
		cur;
	for (let r = 1; r <= m; r++)
		for (let c = 1; c <= n; c++) {
			cur = matrix[r - 1][c - 1];
			dp[r][c] = cur - dp[r - 1][c - 1] + dp[r - 1][c] + dp[r][c - 1];
			if (cur === k || dp[r][c] === k) return k;
			dp[r][c] < k && (res = Math.max(res, dp[r][c]));
		}
	for (let r1 = 0; r1 < m; r1++)
		for (let c1 = 0; c1 < n; c1++)
			for (let r2 = r1; r2 < m; r2++)
				for (let c2 = c1; c2 < n; c2++) {
					recSum = getSumOfRectangle(r1, c1, r2, c2);
					if (recSum > k || recSum <= res) continue;
					if (recSum === k) return k;
					res = recSum;
				}
	return res;
};
maxSumSubmatrix(
	[
		[1, 0, 1],
		[0, -2, 3],
	],
	2
);
