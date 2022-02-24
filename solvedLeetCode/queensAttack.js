function queensAttack(n, k, r_q, c_q, obstacles) {
	let count = 0,
		i,
		j;
	const grid = {},
		visit = (x, y) => {
			if (x < 1 || y < 1 || x > n || y > n || grid[x + "," + y]) return;
			count++;
			visit(x + i, y + j);
		};
	for (const obs of obstacles) grid[obs[0] + "," + obs[1]] = true;

	for (i = -1; i < 2; i++)
		for (j = -1; j < 2; j++) {
			if (!i && !j) continue;
			visit(r_q + i, c_q + j);
		}

	return count;
}
queensAttack(100000, 0, 4187, 5068, []);
// You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

// A queen is standing on an  chessboard. The chess board's rows are numbered from  to , going from bottom to top. Its columns are numbered from  to , going from left to right. Each square is referenced by a tuple, , describing the row, , and column, , where the square is located.

// The queen is standing at position . In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote all the cells the queen can attack from :

// image

// There are obstacles on the chessboard, each preventing the queen from attacking any square beyond it on that path. For example, an obstacle at location  in the diagram above prevents the queen from attacking cells , , and :

// image

// Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at . In the board above, there are  such squares.

// Function Description

// Complete the queensAttack function in the editor below.

// queensAttack has the following parameters:
// - int n: the number of rows and columns in the board
// - nt k: the number of obstacles on the board
// - int r_q: the row number of the queen's position
// - int c_q: the column number of the queen's position
// - int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle

// Returns
// - int: the number of squares the queen can attack

// Input Format

// The first line contains two space-separated integers  and , the length of the board's sides and the number of obstacles.
// The next line contains two space-separated integers  and , the queen's row and column position.
// Each of the next  lines contains two space-separated integers  and , the row and column position of .

// Constraints

// A single cell may contain more than one obstacle.
// There will never be an obstacle at the position where the queen is located.
