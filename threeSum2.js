/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums.sort((a, b) => a - b);
	let target, j, k;
	const res = [];
	console.log(nums);
	const nextJ = () => {
		while (nums[j + 1] === nums[j]) j++;
		j++;
	};

	const nextK = () => {
		while (nums[k - 1] === nums[k]) k--;
		k--;
	};

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;
		target = -nums[i];
		j = i + 1;
		k = nums.length - 1;

		while (j < k)
			if (nums[j] + nums[k] === target) {
				res.push([nums[i], nums[j], nums[k]]);
				nextJ();
				nextK();
			} else if (nums[j] + nums[k] > target) nextK();
			else nextJ();
	}
	console.log(res);
	return res;
};

threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
