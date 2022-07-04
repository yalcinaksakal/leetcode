/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function (mat, threshold) {
	const m = mat.length,
		n = mat[0].length,
		preSum = Array(m + 1)
			.fill()
			.map(() => Array(n + 1).fill(0)),
		bs = (x, y) => {
			//binary search for the length of square whose starting pos is (x,y) and sum is below or equal to threshold
			// ***preSum(x+1,y+1) is equal to sum of elements between (0,0) and (x,y)
			let low = 0,
				mid,
				high = Math.min(m - x, n - y);
			while (low < high) {
				mid = (low + high) >>> 1;
				//length=mid, starting point=(x,y), endpoint=(x+length-1,y+length-1)
				preSum[x + mid][y + mid] -
					preSum[x][y + mid] -
					preSum[x + mid][y] +
					preSum[x][y] <
				threshold
					? (low = mid + 1)
					: (high = mid);
			}
			preSum[x + low][y + low] -
				preSum[x][y + low] -
				preSum[x + low][y] +
				preSum[x][y] >
				threshold && low--;
			return low;
		};
	for (let r = 1; r < m + 1; r++)
		for (let c = 1; c < n + 1; c++)
			preSum[r][c] =
				mat[r - 1][c - 1] -
				preSum[r - 1][c - 1] +
				preSum[r - 1][c] +
				preSum[r][c - 1];
	let maxSide = 0;
	for (let i = 0; i < m - maxSide; i++)
		for (let j = 0; j < n - maxSide; j++) maxSide = Math.max(maxSide, bs(i, j));

	return maxSide;
};
console.log(
	maxSideLength(
		[
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2, 2],
			[2, 2, 2, 2, 2],
		],
		1
	)
);
