function printShortestPath(n, i1, j1, i2, j2) {
	// Print the distance along with the sequence of moves.
	const visited = {},
		moves = [
			[-2, -1, "UL"],
			[-2, 1, "UR"],
			[0, 2, "R"],
			[2, 1, "LR"],
			[2, -1, "LL"],
			[0, -2, "L"],
		],
		bfs = [[i1, j1, ""]],
		check = (x, y) => x > -1 && y > -1 && x < n && y < n;
	let nx,
		ny,
		np,
		i = 0;
	for (let i = 0; i < n; i++) visited[i] = {};
	visited[i1][j1] = true;
	while (i < bfs.length) {
		const [x, y, path] = bfs[i++];
		for (let m = 0; m < 6; m++) {
			nx = x + moves[m][0];
			ny = y + moves[m][1];
			if (check(nx, ny) && !visited[nx][ny]) {
				np = path + (path ? " " : "") + moves[m][2];
				if (nx === i2 && ny === j2) {
					console.log(np.split(" ").length);
					console.log(np);
					return;
				}
				visited[nx][ny] = true;
				bfs.push([nx, ny, np]);
			}
		}
	}
	console.log("IMPOSSIBLE");
}

printShortestPath(7, 6, 6, 0, 1);
