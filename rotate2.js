/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (mat) {
	const n = mat.length;
	for (let i = 0, j = n - 1; i < j; ++i, --j)
		[mat[i], mat[j]] = [mat[j], mat[i]];

	for (let i = 0; i < n; ++i)
		for (let j = i + 1; j < n; ++j)
			[mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
};
