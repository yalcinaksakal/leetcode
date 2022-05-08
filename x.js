/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
	let steps = 0,
		carry = 0;
	for (let i = s.length - 1; i; --i)
		if (+s[i] + carry) {
			steps += 2;
			carry = 1;
		} else steps++;

	return steps + carry;
};
console.log(numSteps("1101"));

/**
 * @param {string} s
 * @return {number}
 */
var numSteps1 = function (s) {
	let steps = 0,
		last;
	s = s.split("").map(digit => +digit);
	while (s.length > 1) {
		last = s.pop();
		if (last) {
			let i = s.length - 1;
			while (i > -1) {
				s[i] = s[i] ? 0 : 1;
				if (s[i--]) break;
			}
			!s[0] && s.unshift(1);
			steps += 2;
		} else steps++;
	}
	return steps;
};
