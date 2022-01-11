var solve = function (board) {
	const m = board.length,
		n = board[0].length,
		dp = {},
		directions = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		];
	const dfs = (i, j) => {
		if (
			i < 0 ||
			j < 0 ||
			i > m - 1 ||
			j > n - 1 ||
			board[i][j] == 1 ||
			board[i][j] == "X"
		)
			return;
		board[i][j] = 1;
		for (const [x, y] of directions) dfs(i + x, j + y);
	};
	for (let j = 0; j < n; j++) {
		if (board[0][j] == "O") dfs(0, j);
		if (board[m - 1][j] == "O") dfs(m - 1, j);
	}
	for (let i = 1; i < m - 1; i++) {
		if (board[i][0] == "O") dfs(i, 0);
		if (board[i][n - 1] == "O") dfs(i, n - 1);
	}
	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) board[i][j] = board[i][j] == 1 ? "O" : "X";
	console.log(board);
};
solve([
	["X", "O", "X", "O", "X", "O", "O", "O", "X", "O"],
	["X", "O", "O", "X", "X", "X", "O", "O", "O", "X"],
	["O", "O", "O", "O", "O", "O", "O", "O", "X", "X"],
	["O", "O", "O", "O", "O", "O", "X", "O", "O", "X"],
	["O", "O", "X", "X", "O", "X", "X", "O", "O", "O"],
	["X", "O", "O", "X", "X", "X", "O", "X", "X", "O"],
	["X", "O", "X", "O", "O", "X", "X", "O", "X", "O"],
	["X", "X", "O", "X", "X", "O", "X", "O", "O", "X"],
	["O", "O", "O", "O", "X", "O", "X", "O", "X", "O"],
	["X", "X", "O", "X", "X", "X", "X", "O", "O", "O"],
]);
