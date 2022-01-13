/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
	const sums = {};
	let max = 0,
		sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i] ? nums[i] : -1;
		if (!sum) {
			max = Math.max(max, i + 1);
			continue;
		}
		if (sums[sum] == undefined) {
			sums[sum] = i;
			continue;
		}
		max = Math.max(max, i - sums[sum]);
	}

	return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength1 = function (nums) {
	const preSum = [];
	let max = 0,
		sum = 0,
		j;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i] ? nums[i] : -1;
		preSum.push(sum);
		if (!sum) max = i + 1;
	}

	for (let i = 1; i < nums.length - max; i++) {
		j = nums.length - 1;
		while (j >= i + max) {
			if (preSum[j] == preSum[i - 1]) {
				max = j - i + 1;
				break;
			}
			j--;
		}
	}
	return max;
};
