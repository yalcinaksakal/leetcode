/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
	const big = x > y ? "ab" : "ba",
		small = x > y ? "ba" : "ab",
		bigP = x > y ? x : y,
		smallP = x > y ? y : x;
	let points = 0;

	const getPoints = (str, p) => {
		const stack = [];
		for (let i = 0; i < s.length; i++) {
			if (s[i] == str[1] && stack[stack.length - 1] == str[0]) {
				stack.pop();
				points += p;
			} else stack.push(s[i]);
		}
		return stack;
	};
	s = getPoints(big, bigP);
	getPoints(small, smallP);
	return points;
};
