/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
	for (let i = 1; i < chalk.length; i++) chalk[i] += chalk[i - 1];
	let low = 0,
		high = chalk.length - 1,
		mid;
	k = k % chalk[high];
	while (low < high) {
		mid = (low + high) >>> 1;
		chalk[mid] > k ? (high = mid) : (low = mid + 1);
	}
	return low;
};
