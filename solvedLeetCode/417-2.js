/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
	const m = heights.length,
		n = heights[0].length,
		res = [],
		rain = (row, column) => {
			const visited = {},
				bfs = [],
				visit = (x, y, h) => {
					if (!visited[x + "," + y] && heights[x] && heights[x][y] >= h) {
						visited[x + "," + y] = true;
						bfs.push([x, y]);
					}
				};
			let i = -1,
				x,
				y,
				h;
			for (let i = 0; i < n; i++) {
				visited[row + "," + i] = true;
				bfs.push([row, i]);
			}
			for (let i = 0; i < m; i++) {
				visited[i + "," + column] = true;
				bfs.push([i, column]);
			}
			while (++i < bfs.length) {
				x = bfs[i][0];
				y = bfs[i][1];
				h = heights[bfs[i][0]][bfs[i][1]];
				visit(x, y + 1, h);
				visit(x - 1, y, h);
				visit(x + 1, y, h);
				visit(x, y - 1, h);
			}
			return visited;
		},
		pacific = rain(0, 0),
		atlantic = rain(m - 1, n - 1);
	for (const key of Object.keys(pacific))
		atlantic[key] && res.push(key.split(","));
	return res;
};
pacificAtlantic([
	[1, 2, 2, 3, 5],
	[3, 2, 3, 4, 4],
	[2, 4, 5, 3, 1],
	[6, 7, 1, 4, 5],
	[5, 1, 1, 2, 4],
]);
