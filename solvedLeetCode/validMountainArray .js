/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
	let isIncreasing = true;
	if (arr.length < 3) return false;
	if (arr[1] <= arr[0]) return false;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] == arr[i - 1] || (!isIncreasing && arr[i] > arr[i - 1]))
			return false;
		if (isIncreasing && arr[i] < arr[i - 1]) isIncreasing = false;
	}
	return !isIncreasing;
};
