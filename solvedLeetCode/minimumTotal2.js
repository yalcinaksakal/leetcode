/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	let min;

	for (let i = 1; i < triangle.length; i++)
		for (let j = 0; j <= i; j++) {
			min = j ? triangle[i - 1][j - 1] : triangle[i - 1][j];
			if (j < i) min = Math.min(min, triangle[i - 1][j]);
			triangle[i][j] += min;
		}

	return Math.min(...triangle.pop());
};
