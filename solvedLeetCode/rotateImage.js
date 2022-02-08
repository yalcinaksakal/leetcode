/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (mat) {
	const n = mat.length;
	let tmp;
	for (let i = 0, j = n - 1; i < j; ++i, --j) {
		tmp = mat[i];
		mat[i] = mat[j];
		mat[j] = tmp;
	}
	for (let i = 0; i < n; ++i)
		for (let j = i + 1; j < n; ++j) {
			tmp = mat[i][j];
			mat[i][j] = mat[j][i];
			mat[j][i] = tmp;
		}
};
