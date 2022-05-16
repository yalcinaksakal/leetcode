/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	const n = grid.length,
		bfs = [[0, 0], null],
		pushNeighbours = (x, y) => {
			for (let i = x - 1; i < x + 2; i++)
				for (let j = y - 1; j < y + 2; j++)
					if (grid[i] && j > -1 && j < n && !grid[i][j]) {
						if (i === n - 1 && j === i) return true;
						grid[i][j] = 1;
						bfs.push([i, j]);
					}
		};
	let i = -1,
		dist = 1;
	if (grid[0][0] || grid[n - 1][n - 1]) return -1;
	if (n === 1) return 1;
	grid[0][0] = 1;
	while (++i < bfs.length)
		if (!bfs[i]) {
			i + 1 < bfs.length && bfs.push(null);
			dist++;
		} else if (pushNeighbours(...bfs[i])) return dist + 1;
	return -1;
};
console.log(shortestPathBinaryMatrix([[0]]));
