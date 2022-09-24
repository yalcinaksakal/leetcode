/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
	const romanDigits = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	let res = 0,
		val;
	for (let i = 0; i < s.length; i++) {
		val = romanDigits[s[i] + s[i + 1]];
		val ? i++ : (val = romanDigits[s[i]]);
		res += val;
	}
	return res;
};
