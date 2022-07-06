/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {
	const divisors = [a, b, c].sort((a, b) => a - b),
		getPowerOf = (base, val, power = 0) =>
			val % base
				? { power, division: val }
				: getPowerOf(base, val / base, power + 1),
		countUglies = val => {
			let count = 0;
			divisors.forEach(div => {
				const res = getPowerOf(div, val);
				val = res.division;
				res.power &&
					(count ? (count *= res.power + 1) : (count = res.power + 1));
			});
			return count;
		};
	(!(divisors[2] % divisors[1]) || !(divisors[2] % divisors[0])) &&
		divisors.pop();
	!(divisors[1] % divisors[0]) && divisors.splice(1, 1);

	let low = 1,
		mid,
		high = 2 * 10 ** 9;
};

nthUglyNumber(3, 2, 3, 5);
