/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	const m = grid.length,
		n = grid[0].length,
		res = Array(m)
			.fill()
			.map(() => Array(n).fill(0)),
		isPos = (x, y) =>
			y > -1 &&
			y < n &&
			!grid[x][y] &&
			(!res[x][y] || res[x][y] > distance + 1),
		mark = (a, b) => {
			for (let i = a - 1; i < a + 2; i++) {
				if (i < 0 || i > m - 1) continue;
				for (let j = b - 1; j < b + 2; j++)
					if (isPos(i, j)) {
						res[i][j] = distance + 1;
						done++;
					}
			}
		};
	let done = 1,
		distance = 1;

	if (grid[0][0] || grid[m - 1][n - 1]) return -1;
	res[0][0] = 1;

	while (done) {
		done = 0;
		for (let i = 0; i < m; i++)
			for (let j = 0; j < n; j++)
				if (!grid[i][j] && res[i][j] == distance) mark(i, j);
		distance++;
	}

	return res[m - 1][n - 1] ? res[m - 1][n - 1] : -1;
};
