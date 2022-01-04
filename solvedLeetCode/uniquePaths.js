/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	// m-1 r, n-1 d  comb(m+n-2, m-1)
	let comb = 1,
		i = m + n - 2;
	while (i > m - 1) comb *= i--;
	i = 1;
	while (i < n) comb /= i++;
	console.log(comb);
	return comb;
};

uniquePaths(7, 3);
