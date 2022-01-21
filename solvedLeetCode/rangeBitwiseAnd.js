/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
	if (left == right) return left;
	if (right.toString(2).length - left.toString(2).length) return 0;

	const dif = (right - left).toString(2).length;

	return (
		right &
		left &
		parseInt("1".repeat(left.toString(2).length - dif) + "0".repeat(dif), 2)
	);
};
