/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
	const length = Array(nums.length).fill(1),
		count = {};
	let max = 1,
		k;

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++)
			if (nums[i] > nums[j] && length[i] < 1 + length[j])
				length[i] = 1 + length[j];
		if (length[i] == 1) count[i] = 1;
		else {
			k = 0;
			for (let j = 0; j < i; j++)
				if (nums[i] > nums[j] && length[j] == length[i] - 1) k += count[j];
			count[i] = k;
		}
		max = Math.max(max, length[i]);
	}
	let res = 0;
	for (let i = 0; i < nums.length; i++) {
		if (length[i] == max) res += count[i];
	}
	return res;
};

console.log(findNumberOfLIS([1, 1, 1, 2, 2, 2, 4, 3, 2, 4, 5, 4, 7, 2, 7]));

// arr         1 1 1 2 2 2 4 3 2 4 5 4 7 2 7
// length    0 1 1 1 2 2 2 3 3 2 4 5 4 6 2 6
// count     1 1 1 1 3 3 3 9 9 3 9 9 9 9 3 9
