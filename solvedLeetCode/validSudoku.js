/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	const mapArr = () =>
		Array(9)
			.fill()
			.map(() => ({}));

	const rows = mapArr(),
		columns = mapArr(),
		boxes = mapArr();

	let val, b;
	console.log(rows);
	for (let i = 0; i < 9; i++)
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === ".") continue;
			val = +board[i][j];
			b = Math.floor(i / 3) * 3 + Math.floor(j / 3);
			if (rows[i][val] || columns[j][val] || boxes[b][val]) return false;
			rows[i][val] = 1;
			columns[j][val] = 1;
			boxes[b][val] = 1;
		}

	return true;
};
console.log(
	isValidSudoku([
		["5", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	])
);
