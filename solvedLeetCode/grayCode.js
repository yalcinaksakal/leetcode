/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
	let res = [0, 1];

	for (let i = 2; i <= n; i++)
		//       0 10                       11 1
		res = [
			...res.map(el => el << 1),
			...res.map(el => (el << 1) + 1).reverse(),
		];

	return res;
};
