/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	let left = 0,
		right = matrix.length - 1,
		top,
		bottom,
		tL;
	while (left < right) {
		top = left;
		bottom = right;
		for (let i = 0; i < right - left; i++) {
			tL = matrix[top][left + i];
			matrix[top][left + i] = matrix[bottom - i][left];
			matrix[bottom - i][left] = matrix[bottom][right - i];
			matrix[bottom][right - i] = matrix[top + i][right];
			matrix[top + i][right] = tL;
		}

		left++;
		right--;
	}
};
