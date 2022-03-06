/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
	const m = heights.length,
		n = heights[0].length,
		dir = [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		],
		check = (x, y) => x > -1 && y > -1 && x < m && y < n,
		res = [],
		pacific = Array(m)
			.fill()
			.map(() => Array(n).fill(false)),
		atlantic = Array(m)
			.fill()
			.map(() => Array(n).fill(false)),
		rain = ocean => {
			let i = 0;
			while (i < bfs.length) {
				for (let [x, y] of dir) {
					x += bfs[i][0];
					y += bfs[i][1];
					if (
						check(x, y) &&
						!ocean[x][y] &&
						heights[x][y] >= heights[bfs[i][0]][bfs[i][1]]
					) {
						ocean[x][y] = true;
						bfs.push([x, y]);
					}
				}
				i++;
			}
		};
	let bfs = [];
	for (let i = 0; i < n; i++) {
		pacific[0][i] = true;
		bfs.push([0, i]);
	}
	for (let i = 1; i < m; i++) {
		pacific[i][0] = true;
		bfs.push([i, 0]);
	}
	rain(pacific);

	bfs = [];
	for (i = 0; i < n; i++) {
		atlantic[m - 1][i] = true;
		bfs.push([m - 1, i]);
	}
	for (i = 0; i < m - 1; i++) {
		atlantic[i][n - 1] = true;
		bfs.push([i, n - 1]);
	}
	rain(atlantic);

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++)
			pacific[i][j] && atlantic[i][j] && res.push([i, j]);
	return res;
};
pacificAtlantic([
	[1, 2, 2, 3, 5],
	[3, 2, 3, 4, 4],
	[2, 4, 5, 3, 1],
	[6, 7, 1, 4, 5],
	[5, 1, 1, 2, 4],
]);
