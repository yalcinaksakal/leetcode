/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
	if (n === 1) return start;
	let prev = start;
	for (let i = 1; i < n; i++) prev ^= start + 2 * i;
	return prev;
};
