/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
	const preSum = {};
	preSum[-1] = 0;
	for (let i = 0; i < arr.length; i++) preSum[i] = preum[i - 1] + arr[i];

	let n,
		res = 0;
	for (l = 1; l <= arr.length; l += 2) {
		n = arr.length - l + 1;
		for (let i = 0; i < n; i++) res += preSum[i + l - 1] - preSum[i - 1];
	}

	return res;
};
