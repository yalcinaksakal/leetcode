/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (mat) {
	const n = mat.length,
		rotated = [];
	for (j = 0; j < n; j++) {
		rotated.push([]);
		for (i = n - 1; i > -1; i--) rotated[j].push(mat[i][j]);
	}
	return rotated;
};
