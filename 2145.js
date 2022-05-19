/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
	let sum = 0,
		min = 0,
		max = 0;
	differences.forEach(d => {
		sum += d;
		min = Math.min(sum, min);
		max = Math.max(sum, max);
	});
	const dif = upper - lower - max + min;
	return dif < 0 ? 0 : dif + 1;
};
