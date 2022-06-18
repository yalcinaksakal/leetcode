/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
	let low = 0,
		mid,
		high = arr.length - 1;
	while (low < high) {
		mid = (low + high) >>> 1;
		arr[mid] < x ? (low = mid + 1) : (high = mid);
	}
	Math.abs(arr[low] - x) >= x - arr[low - 1] && low--;
	high = low + 1;
	while (high - low - 1 < k)
		Math.abs(arr[high] - x) < Math.abs(x - arr[low]) || low === -1
			? high++
			: low--;
	return arr.slice(low + 1, low + k + 1);
};
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
