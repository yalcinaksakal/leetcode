/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function (seats) {
	const memo = {},
		m = seats[0].length,
		getRowPossibilities = (prevRow, curRow) => {
			const allPossibilities = { [-1]: [""] };
			for (let i = 0; i < m; i++) {
				allPossibilities[i] = [];
				allPossibilities[i - 1].forEach(possibility => {
					//dont place a student
					allPossibilities[i].push(possibility + curRow[i]);
					//if possible, place a student
					curRow[i] === "." &&
						prevRow[i - 1] !== "1" &&
						prevRow[i + 1] !== "1" &&
						possibility[i - 1] !== "1" &&
						allPossibilities[i].push(possibility + "1");
				});
			}
			return allPossibilities[m - 1];
		},
		place = (prevRow, curRowIndex) => {
			if (curRowIndex === seats.length) return 0;
			const key = prevRow + curRowIndex;
			if (memo[key]) return memo[key];
			let max = 0;
			getRowPossibilities(prevRow, seats[curRowIndex]).forEach(pos => {
				max = Math.max(
					max,
					place(pos, curRowIndex + 1) + pos.split("1").length - 1
				);
			});
			memo[key] = max;
			return max;
		};
	return place("", 0);
};
