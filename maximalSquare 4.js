/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (mat) {
	const m = mat.length,
		n = mat[0].length;
	let max = 0,
		l,
		k;
	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) {
			mat[i][j] = +mat[i][j];
			if (mat[i][j] && !max) max = 1;
		}
	if (!max) return max;

	for (let i = 1; i < m; i++)
		for (let j = 1; j < n; j++) {
			if (!mat[i - 1][j - 1] || !mat[i][j]) continue;
			l = mat[i - 1][j - 1];
			k = 1;
			while (k <= l && mat[i - k][j]) k++;
			k--;
			l = 1;
			while (l <= k && mat[i][j - l]) l++;
			mat[i][j] = l;
			max = Math.max(l, max);
		}

	return max ** 2;
};
