/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
	const c = image[sr][sc],
		fill = (i, j) => {
			if (
				!image[i] ||
				image[i][j] === undefined ||
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
