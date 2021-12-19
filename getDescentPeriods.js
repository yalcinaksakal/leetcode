/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
	// n*(n+1)/2

	let res = 0,
		n = 0;

	for (let i = 0; i < prices.length; i++) {
		n++;
		if (i === prices.length - 1 || prices[i] !== prices[i + 1] + 1) {
			res += (n * (n + 1)) / 2;
			n = 0;
		}
	}

	return res;
};

console.log(getDescentPeriods([8, 6, 7, 7]));
