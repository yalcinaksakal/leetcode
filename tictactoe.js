/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (m) {
	const grid = Array(3)
		.fill()
		.map(() => Array(3).fill(null));
	let t,
		x,
		y = 0;
	const check = () => {
		let r = 0,
			c = 0,
			d1 = 0,
			d2 = 0;
		for (let i = 0; i < 3; i++) {
			grid[x][i] == t && r++;
			grid[i][y] == t && c++;
			grid[i][i] == t && d1++;
			grid[i][2 - i] == t && d2++;
		}
		return r == 3 || c == 3 || d1 == 3 || d2 == 3 ? true : false;
	};

	for ([x, y] of m) {
		grid[x][y] = t;
		if (check(x, y)) return t ? "B" : "A";
		t = 1 - t;
	}

	return m.length == 9 ? "Draw" : "Pending";
};
