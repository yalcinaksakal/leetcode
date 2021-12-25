/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
	const m = image.length,
		n = image[0].length,
		c = image[sr][sc];

	const fill = (i, j) => {
		if (
			i < 0 ||
			j < 0 ||
			i >= m ||
			j >= n ||
			image[i][j] === newColor ||
			image[i][j] !== c
		)
			return;

		image[i][j] = newColor;

		fill(i + 1, j);
		fill(i - 1, j);
		fill(i, j + 1);
		fill(i, j - 1);
	};

	fill(sr, sc);
	return image;
};

console.log(
	floodFill(
		[
			[1, 1, 1],
			[1, 1, 0],
			[1, 0, 1],
		],
		1,
		1,
		2
	)
);
