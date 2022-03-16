/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	let canContinue = true,
		i = digits.length - 1;

	while (canContinue) {
		digits[i] = (digits[i] + 1) % 10;
		canContinue = digits[i--] === 0 && i > -1;
	}

	if (!digits[0]) digits.unshift(1);

	return digits;
};
