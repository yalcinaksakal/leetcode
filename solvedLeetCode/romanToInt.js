/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
	const digits = {
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
		digit,
		i = 0;

	while (i < s.length) {
		digit = s.slice(i, i + 2);
		if (digits[digit]) {
			res += digits[digit];
			i++;
		} else res += digits[s.slice(i, i + 1)];
		i++;
	}
	return res;
};
romanToInt("III");
