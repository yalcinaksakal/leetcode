/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const map = {};
	let res;

	while (!map[n] && n !== 1) {
		map[n] = 1;
		res = 0;
		for (const digit of n + "") res += digit ** 2;
		n = res;
	}

	return n === 1;
};
console.log(isHappy(19));
