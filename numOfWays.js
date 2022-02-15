/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function (n) {
	// number of possibilites of same colored ends and different colored ends
	let same = 6,
		dif = 6;
	const mod = 10 ** 9 + 7;
	while (--n) {
		dif = (2 * same + 2 * dif) % mod;
		same = (same + dif) % mod;
	}
	return (same + dif) % mod;
};
