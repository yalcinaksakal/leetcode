/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const directions = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		],
		res = [],
		m = matrix.length,
		n = matrix[0].length;

	let x = 0,
		y = 0,
		direction = 0,
		step = 0;

	const isPossible = (x, y) =>
		!(x < 0 || y < 0 || x > m - 1 || y > n - 1 || matrix[x][y] === "d");

	while (step < m * n) {
		res.push(matrix[x][y]);
		matrix[x][y] = "d";
		step++;

		if (
			!isPossible(x + directions[direction][0], y + directions[direction][1])
		) {
			direction++;
			direction %= 4;
		}
		x += directions[direction][0];
		y += directions[direction][1];
	}

	return res;
};
