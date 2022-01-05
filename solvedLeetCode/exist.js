/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	const m = board.length,
		n = board[0].length,
		dir = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		];

	const isPossible = (x, y) =>
		!(x < 0 || y < 0 || x > m - 1 || y > n - 1 || !board[x][y]);

	const check = (i, j, ch) => {
		if (!isPossible(i, j)) return false;
		if (board[i][j] !== word[ch]) return false;
		if (ch === word.length - 1) return true;

		board[i][j] = 0;
		let res = false,
			k = 0;

		while (!res && k < 4) {
			res = check(i + dir[k][0], j + dir[k][1], ch + 1);
			k++;
		}
		board[i][j] = word[ch];
		return res;
	};

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) if (check(i, j, 0)) return true;
	}

	return false;
};
console.log(
	exist(
		[
			["A", "B", "E"],
			["B", "C", "D"],
		],
		"ABCDEB"
	)
);
