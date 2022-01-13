/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfFlooredPairs = function (nums) {
	const sum = {},
		mod = 10 ** 9 + 7;

	let res = 0,
		j,
		subSum;
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (sum[nums[i]]) {
			res += sum[nums[i]];
			continue;
		}
		subSum = 0;
		j = 0;
		while (nums[j] <= nums[i]) {
			subSum += Math.floor(nums[i] / nums[j]);
			j++;
		}
		sum[nums[i]] = subSum;
		res = (res + subSum) % mod;
	}
	return res;
};

sumOfFlooredPairs([7, 7, 7]);
