/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
	const operate = start => {
		let count = 0;
		for (const ch of s) {
			ch != start && count++;
			start = 1 - start;
		}
		return count;
	};
	return Math.min(operate(0), operate(1));
};
