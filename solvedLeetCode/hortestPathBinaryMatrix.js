/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	const m = grid.length,
		n = grid[0].length;

	if (grid[0][0] || grid[m - 1][n - 1]) return -1;

	const res = Array(m)
		.fill()
		.map(() => Array(n).fill(0));

	res[0][0] = 1;

	let done = 1,
		distance = 1;

	const isPos = (x, y) =>
		y > -1 && y < n && !grid[x][y] && (!res[x][y] || res[x][y] > distance + 1);

	const mark = (a, b) => {
		for (let i = a - 1; i < a + 2; i++) {
			if (i < 0 || i > m - 1) continue;
			for (let j = b - 1; j < b + 2; j++)
				if (isPos(i, j)) {
					res[i][j] = distance + 1;
					done++;
				}
		}
	};
	while (done) {
		done = 0;

		for (let i = 0; i < m; i++)
			for (let j = 0; j < n; j++)
				if (!grid[i][j] && res[i][j] == distance) mark(i, j);

		distance++;
	}
	return res[m - 1][n - 1] ? res[m - 1][n - 1] : -1;
};
console.log(
	shortestPathBinaryMatrix([
		[1, 0, 0],
		[1, 1, 0],
		[1, 1, 0],
	])
);
