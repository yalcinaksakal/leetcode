/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	let canContinue = true,
		i = digits.length - 1;
	while (canContinue) {
		if (i == -1) {
			digits.unshift(1);
			break;
		}
		canContinue = digits[i] == 9;
		digits[i] = (digits[i] + 1) % 10;
		i--;
	}
	return digits;
};
