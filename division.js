/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
	const divider = (dividend, divisor) => {
		quotient = 0;
		while (divisor <= dividend) {
			quotient++;
			dividend -= divisor;
		}
		return quotient;
	};
	let quotient =
		divisor === 1 ? dividend : divider(Math.abs(dividend), Math.abs(divisor));
	dividend < 0 !== divisor < 0 && (quotient = -quotient);
	return (quotient | 0) == quotient ? quotient : 2147483647;
};
