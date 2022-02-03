/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
	const m = board.length,
		max = m ** 2,
		dir = (m - 1) % 2,
		visited = {},
		que = [{ cell: 1, moves: 0 }];
	let nextCell;
	const getRowCol = cell => {
		const row = m - 1 - Math.floor((cell - 1) / m);
		const col = row % 2 == dir ? (cell - 1) % m : m - 1 - ((cell - 1) % m);
		return { row, col };
	};

	while (que[0]) {
		const { cell, moves } = que.shift();
		for (let i = 1; i < 7; i++) {
			nextCell = cell + i;
			const { row, col } = getRowCol(nextCell);
			if (board[row][col] != -1) nextCell = board[row][col];
			if (nextCell == max) return moves + 1;
			if (!visited[nextCell]) {
				visited[nextCell] = true;
				que.push({ cell: nextCell, moves: moves + 1 });
			}
		}
	}
	return -1;
};
console.log(
	snakesAndLadders([
		[-1, -1, -1, -1, -1, -1],
		[-1, -1, -1, -1, -1, -1],
		[-1, -1, -1, -1, -1, -1],
		[-1, 30, -1, -1, 13, -1],
		[-1, -1, -1, -1, -1, -1],
		[-1, 1, -1, -1, -1, -1],
	])
);
