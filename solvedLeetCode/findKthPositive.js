/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
	let numberOfMissings = arr[0] - 1;
	let i = 0;

	if (numberOfMissings >= k) return k;

	while (i < arr.length - 1) {
		if (numberOfMissings + arr[i + 1] - arr[i] - 1 >= k) break;
		i++;
		numberOfMissings += arr[i] - arr[i - 1] - 1;
	}

	return arr[i] + k - numberOfMissings;
};
