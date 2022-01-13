/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function (board, rMove, cMove, color) {
	if (board[rMove][cMove] != ".") return false;

	const m = board.length,
		n = board[0].length,
		c = color == "B" ? "W" : "B";
	let x, y, count;

	const isGoodLine = (i, j) => {
		if (i < 0 || j < 0 || i == m || j == n || board[i][j] == ".") return false;
		if (board[i][j] == c) {
			count++;
			return isGoodLine(i + x, j + y);
		} else return count > 0;
	};

	let res = false;

	for (x = -1; x < 2; x++)
		for (y = -1; y < 2; y++) {
			if (!x && !y) continue;
			count = 0;
			res = isGoodLine(rMove + x, cMove + y);
			if (res) return res;
		}

	return res;
};

checkMove(
	[
		[".", ".", ".", ".", ".", ".", ".", "."],
		[".", "B", ".", ".", "W", ".", ".", "."],
		[".", ".", "W", ".", ".", ".", ".", "."],
		[".", ".", ".", "W", "B", ".", ".", "."],
		[".", ".", ".", ".", ".", ".", ".", "."],
		[".", ".", ".", ".", "B", "W", ".", "."],
		[".", ".", ".", ".", ".", ".", "W", "."],
		[".", ".", ".", ".", ".", ".", ".", "B"],
	],
	4,
	4,
	"W"
);
