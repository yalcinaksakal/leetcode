function bomberMan(n, grid) {
	// Write your code here
	const x = grid.length,
		y = grid[0].length,
		play = board => {
			const newGrid = {},
				res = [];
			let row;
			for (let i = -1; i <= x; i++) newGrid[i] = {};

			for (let i = 0; i < x; i++)
				for (let j = 0; j < y; j++)
					if (board[i][j] === "O")
						newGrid[i][j] =
							newGrid[i + 1][j] =
							newGrid[i - 1][j] =
							newGrid[i][j + 1] =
							newGrid[i][j - 1] =
								true;

			for (let i = 0; i < x; i++) {
				row = "";
				for (let j = 0; j < y; j++) row += newGrid[i][j] ? "." : "O";
				res.push(row);
			}
			return res;
		};

	if (n < 2) return grid;
	if (!(n % 2))
		return Array(x)
			.fill()
			.map(() => "O".repeat(y));

	return (n - 3) % 4 ? play(play(grid)) : play(grid);
}

console.log(
	bomberMan(5, [
		".......",
		"...O.O.",
		"....O..",
		"..O....",
		"OO...OO",
		"OO.O...",
	])
);
