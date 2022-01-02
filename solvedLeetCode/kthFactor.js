/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
	if (k === 1) return 1;
	let factor = 1,
		curIndex = 1;

	while (curIndex < k && factor <= n / 2) {
		factor++;
		if (!(n % factor)) curIndex++;
	}

	return curIndex === k ? factor : curIndex === k - 1 ? n : -1;
};
