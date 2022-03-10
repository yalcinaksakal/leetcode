/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

var updateMatrix = function (mat) {
	const m = mat.length,
		n = mat[0].length,
		result = Array(m)
			.fill(null)
			.map(() => Array(n).fill(null)),
		placer = (i, j, value) => {
			for (const [x, y] of [
				[i + 1, j],
				[i - 1, j],
				[i, j + 1],
				[i, j - 1],
			])
				if (x < m && x >= 0 && y >= 0 && y < n && result[x][y] === null) {
					placed++;
					result[x][y] = value;
				}
		};
	let distance = -1,
		placed = 0;

	while (placed < m * n) {
		for (i = 0; i < m; i++)
			for (j = 0; j < n; j++)
				if (distance === -1 && !mat[i][j]) {
					result[i][j] = 0;
					placed++;
				} else if (distance === 0 && !mat[i][j]) placer(i, j, 1);
				else if (distance > 0 && result[i][j] === distance)
					placer(i, j, distance + 1);
		distance++;
	}
	return result;
};
