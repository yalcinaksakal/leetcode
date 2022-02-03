/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
	const res = [];
	const isSelfDiv = n => {
		for (const c of n + "") if (c == "0" || n % +c) return false;
		return true;
	};

	for (let i = left; i <= right; i++) isSelfDiv(i) && res.push(i);

	return res;
};
