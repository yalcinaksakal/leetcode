/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
	let sum = 0;
	const res = Array(nums.length).fill(-1),
		length = 2 * k + 1;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (i >= length - 1) {
			res[i - k] = Math.floor(sum / length);
			sum -= nums[i - length + 1];
		}
	}
	return res;
};
console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
