/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = a =>
	Math.max(...a.map(r => r.reduce((acc, cur) => acc + cur, 0)));
