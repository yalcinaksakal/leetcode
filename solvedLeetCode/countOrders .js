/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
	//n!*1*3*5*...(2n-1)
	const mod = 10 ** 9 + 7;
	let res = 1;
	while (n > 1) {
		res = (res * n * (2 * n - 1)) % mod;
		n--;
	}

	return res;
};
