/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
	const w = {},
		letters = {},
		m = board.length,
		n = board[0].length,
		res = new Set();

	let max = 0,
		cur = "";

	for (const word of words) {
		w[word] = 1;
		for (let i = 0; i < word.length; i++) {
			if (!letters[i]) letters[i] = {};
			letters[i][word[i]] = 1;
		}
		max = Math.max(max, word.length);
	}

	const dfs = (i, j) => {
		if (w[cur]) res.add(cur);
		if (
			i < 0 ||
			j < 0 ||
			i == m ||
			j == n ||
			!board[i][j] ||
			cur.length == max ||
			!letters[cur.length][board[i][j]]
		)
			return;
		const tmpB = board[i][j],
			tmpW = cur;
		cur += tmpB;
		board[i][j] = 0;
		for (let x = -1; x < 2; x++)
			for (let y = -1; y < 2; y++) if ((!x || !y) && x != y) dfs(i + x, j + y);
		board[i][j] = tmpB;
		cur = tmpW;
	};
	for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) dfs(i, j);

	return Array.from(res);
};
