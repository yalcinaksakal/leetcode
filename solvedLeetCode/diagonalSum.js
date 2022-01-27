/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
	const n = mat.length;
	let res = 0;
	for (let i = 0; i < n; i++)
		res += mat[i][i] + (i == n - i - 1 ? 0 : mat[i][n - 1 - i]);
	return res;
};
console.log(
	diagonalSum([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
