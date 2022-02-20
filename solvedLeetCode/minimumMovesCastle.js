function minimumMoves(grid, sX, sY, gX, gY) {
	// Write your code here
	if (sX === gX && sY === gY) return 0;
	let count = 1,
		i = -1;
	const n = grid.length,
		bfs = [[sX, sY], null],
		visited = {},
		check = (x, y) => {
			if (visited[x + "," + y]) return false;
			if (x === gX && y === gY) return true;
			bfs.push([x, y]);
			visited[x + "," + y] = true;
			return false;
		},
		getNeighbors = (x, y) => {
			let i = x;
			while (--i > -1 && grid[i][y] !== "X") if (check(i, y)) return true;
			i = x;
			while (++i < n && grid[i][y] !== "X") if (check(i, y)) return true;
			i = y;
			while (--i > -1 && grid[x][i] !== "X") if (check(x, i)) return true;
			i = y;
			while (++i < n && grid[x][i] !== "X") if (check(x, i)) return true;
			return false;
		};
	visited[sX + "," + sY] = true;
	while (++i < bfs.length) {
		if (!bfs[i]) {
			count++;
			if (i + 1 < bfs.length) bfs.push(null);
			continue;
		}
		if (getNeighbors(...bfs[i])) return count;
	}
}
