/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
	let openBrackets = 0,
		swapCount = 0;
	const swap = () => {
		swapCount++;
		openBrackets = 1;
	};
	for (let i = 0; i < s.length; i++)
		s[i] === "[" ? openBrackets++ : openBrackets ? openBrackets-- : swap();
	return swapCount;
};
