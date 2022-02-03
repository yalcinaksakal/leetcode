/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
	let count = 0;
	for (const m of moves) count += m == "R" || m == "D" ? 1 : -1;
	return !count;
};
