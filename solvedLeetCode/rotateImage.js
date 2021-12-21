/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	let l = 0,
		r = matrix.length - 1,
		t,
		b,
		tl;
	while (l < r) {
		t = l;
		b = r;
		for (let i = 0; i < r - l; i++) {
			tl = matrix[t][l + i];
			matrix[t][l + i] = matrix[b - i][l];
			matrix[b - i][l] = matrix[b][r - i];
			matrix[b][r - i] = matrix[t + i][r];
			matrix[t + i][r] = tl;
		}

		l++;
		r--;
	}
};
