/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	const columns = {};
	for (let i = 0; i < matrix.length; i++)
		for (let j = 0; j < matrix[0].length; j++)
			if (columns[j] && matrix[i][j]) matrix[i][j] = 0;
			else if (!matrix[i][j]) {
				while (j < matrix[0].length) {
					if (!matrix[i][j]) {
						for (let k = 0; k < i; k++) matrix[k][j] = 0;
						columns[j] = 1;
					}
					j++;
				}
				matrix[i] = Array(matrix[0].length).fill(0);
			}
	console.log(matrix);
};

setZeroes([
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1],
]);
