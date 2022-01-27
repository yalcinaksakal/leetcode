/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
	if (n < 2) return 0;
	const map = {};
	for (let i = 0; i < n; i++)
		map[manager[i]] ? map[manager[i]].push(i) : (map[manager[i]] = [i]);

	const traverse = r => {
		if (!map[r]) return 0;
		let max = 0;
		map[r].forEach(emp => (max = Math.max(max, traverse(emp))));
		return max + informTime[r];
	};

	return traverse(map[-1][0]);
};
console.log(
	numOfMinutes(
		15,
		0,
		[-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
		[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
	)
);
