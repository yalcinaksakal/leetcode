/**
 * @param {number} num
 * @return {number}
 */
var monotoneIncreasingDigits = function (num) {
	num += "";
	const l = num.length;
	let i = l - 1;

	while (i > 0)
		num[i--] < num[i] &&
			(num = num.slice(0, i) + (num[i] - 1) + "9".repeat(l - i - 1));

	return +num;
};
