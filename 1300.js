/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
	let low = 1,
		mid,
		high = Math.max(...arr);
	const getSumdif = val =>
		arr.reduce((acc, cur) => acc + (cur < val ? cur : val), 0) - target;
	while (low < high) {
		mid = (low + high) >>> 1;
		getSumdif(mid) < 0 ? (low = mid + 1) : (high = mid);
	}
	Math.abs(getSumdif(low - 1)) <= Math.abs(getSumdif(low)) && low--;
	return low;
};

console.log(findBestValue([2, 3, 5], 11));
