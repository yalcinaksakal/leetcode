/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
	const res = new Set();
	let digit;

	const getNums = (s, num = s + "") => {
		if (num.length === n) {
			res.add(+num);
			return;
		}
		digit = s + k;
		if (digit < 10) getNums(digit, num + digit);

		digit = s - k;
		if (digit > -1) getNums(digit, num + digit);
	};

	for (let i = 1; i < 10; i++) getNums(i);

	return [...res];
};

numsSameConsecDiff(3, 0);
