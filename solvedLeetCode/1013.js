/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
	let sum = 0,
		zeroSums = 0;
	const sums = {};
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		sums[sum] ? (sums[sum].last = i) : (sums[sum] = { first: i, last: i });
		!sum && zeroSums++;
	}
	return sum ? sums[(sum * 2) / 3]?.last > sums[sum / 3]?.first : zeroSums > 2;
};

var canThreePartsEqualSum1 = function (arr) {
	let sum = 0,
		sumDiv3 = arr.reduce((acc, cur) => acc + cur, 0) / 3,
		count = 0;
	if (sumDiv3 !== Math.floor(sumDiv3)) return false;
	for (let i = 0, last = arr.length - 1; i < last; i++) {
		sum += arr[i];
		if (sum === sumDiv3) {
			if (count++) return true;
			sumDiv3 *= 2;
		}
	}
	return false;
};
