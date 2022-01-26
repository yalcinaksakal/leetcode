/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (h, m) {
	const a = Math.abs(h * 30 + m / 2 - m * 6);
	return Math.min(a, 360 - a);
};
