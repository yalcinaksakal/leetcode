/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
	const m = board.length,
		n = board[0].length;
	let res = 0;

	const dfs = (i, j) => {
		if (i == -1 || j == -1 || i == m || j == n || board[i][j] != "X") return;
		board[i][j] = ".";
		dfs(i + 1, j);
		dfs(i - 1, j);
		dfs(i, j - 1);
		dfs(i, j + 1);
	};

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++)
			if (board[i][j] == "X") {
				res++;
				dfs(i, j);
			}
	return res;
};
