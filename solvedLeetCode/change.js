/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
	const d = Array(amount + 1).fill(0);
	d[0] = 1;
	for (const c of coins)
		for (let a = 1; a <= amount; a++) if (a >= c) d[a] += d[a - c];
	return d[amount];
};
change(11, [1, 2, 5]);
