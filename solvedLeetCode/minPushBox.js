/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function (grid) {
	const m = grid.length,
		n = grid[0].length,
		dir = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		],
		boxMoves = {};
	let t,
		s,
		b,
		push = 0;

	for (let i = 0; i < m && (!t || !s || !b); i++)
		for (let j = 0; j < n && (!t || !s || !b); j++) {
			if (grid[i][j] == "T") t = [i, j];
			if (grid[i][j] == "B") b = [i, j];
			if (grid[i][j] == "S") s = [i, j];
		}

	if (b[0] == t[0] && b[1] == t[1]) return 0;

	const isValid = (i, j) =>
		i == -1 || j == -1 || i == m || j == n || grid[i][j] == "#" ? false : true;

	const bfs = move => {
		let i = 0;
		const next = [],
			state = {};
		while (i < move.length) {
			const [bi, bj, si, sj] = move[i++];
			let x, y;
			state[bi + "," + bj + "," + si + "," + sj] = 1;

			for (let i = 0; i < 4; i++) {
				x = si + dir[i][0];
				y = sj + dir[i][1];
				if (!isValid(x, y) || state[bi + "," + bj + "," + x + "," + y])
					continue;
				if (x == bi && y == bj) {
					const a = x + dir[i][0],
						b = y + dir[i][1];
					if (a == t[0] && b == t[1]) return push + 1;

					if (isValid(a, b) && !boxMoves[a + "," + b + "," + i]) {
						next.push([a, b, x, y]);
						boxMoves[a + "," + b + "," + i] = push + 1;
					}
					continue;
				}
				move.push([bi, bj, x, y]);
				state[bi + "," + bj + "," + x + "," + y] = true;
			}
		}
		push++;
		return next.length ? bfs(next) : -1;
	};

	return bfs([[b[0], b[1], s[0], s[1]]]);
};

console.log(
	minPushBox([
		[".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
		[".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
		["#", "#", ".", ".", "#", ".", ".", ".", ".", ".", ".", "."],
		["#", ".", "#", "#", "#", ".", "B", ".", ".", ".", ".", "."],
		[".", ".", "#", ".", ".", ".", "#", "#", "#", ".", ".", "."],
		[".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
		[".", ".", ".", "S", "#", "#", "T", ".", ".", ".", "#", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", "."],
		[".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
		["#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
	])
);
