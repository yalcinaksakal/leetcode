/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
	const dp = Array(nums.length).fill(1);
	let max = 1,
		min = nums[nums.lenght - 1];

	for (let i = nums.length - 2; i > -1; i--) {
		for (let j = i + 1; j < nums.length; j++)
			if (nums[i] < nums[j] && dp[i] < 1 + dp[j]) dp[i] = 1 + dp[j];

		max = Math.max(max, dp[i]);
	}

	// console.log(dp[0]);
	return max;
};
var lengthOfLIS1 = function (nums) {
	const subseqs = [[]];
	let max = 1,
		length;

	for (const num of nums) {
		length = subseqs.length;
		for (let i = 0; i < length; i++) {
			if (!subseqs[i].length) {
				subseqs.push([num]);
				continue;
			}
			if (num > subseqs[i][subseqs[i].length - 1]) {
				subseqs.push([...subseqs[i], num]);
				max = Math.max(max, subseqs[i].length + 1);
			}
		}
	}

	console.log(max);
	return max;
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
