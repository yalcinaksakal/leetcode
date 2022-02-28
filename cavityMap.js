function cavityMap(grid) {
	const m = grid.length,
		n = grid[0].length,
		check = (i, j) =>
			grid[i - 1][j] !== "X" &&
			grid[i][j - 1] !== "X" &&
			+grid[i][j] > +grid[i][j - 1] &&
			+grid[i][j] > +grid[i][j + 1] &&
			+grid[i][j] > +grid[i - 1][j] &&
			+grid[i][j] > +grid[i + 1][j];
	grid = grid.map(r => r.split("").map(el => +el));
	for (let i = 1; i < m - 1; i++)
		for (let j = 1; j < n - 1; j++) if (check(i, j)) grid[i][j] = "X";
	return grid.map(r => r.join(""));
}
