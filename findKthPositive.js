/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
	let numberOfMissings = arr[0] - 1;
	let i = 0,
		isAdded = false;

	if (numberOfMissings >= k) return k;

	while (i < arr.length - 1 && numberOfMissings < k) {
		i++;
		isAdded = false;
		if (numberOfMissings + arr[i] - arr[i - 1] - 1 >= k) break;
		isAdded = true;
		numberOfMissings += arr[i] - arr[i - 1] - 1;
	}

	return arr[i] + (k - numberOfMissings) * (isAdded ? 1 : -1);
};
