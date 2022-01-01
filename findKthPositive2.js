/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
	let prev = arr[0] - 1,
		cur,
		i;

	if (prev >= k) return k;

	for (i = 1; i < arr.length; i++) {
		cur = arr[i] - i - 1;
		if (cur >= k) break;
		prev = cur;
	}

	return arr[i - 1] + k - (cur < k ? cur : prev);
};
