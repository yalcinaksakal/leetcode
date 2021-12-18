/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function (nums) {
	let target = nums.reduce((a, b) => a + b),
		newSum;

	if (target % 2 || nums.length < 2) return false;

	target /= 2;
	const posSums = new Set([0]);
	let newPosSums;
	for (const num of nums) {
		newPosSums = [];
		for (const sum of posSums) {
			newSum = sum + num;
			if (newSum === target) return true;
			if (newSum < target) newPosSums.push(newSum);
		}
		newPosSums.forEach(item => posSums.add(item));
	}

	return false;
};

canPartition([1, 2, 5]);
var canPartition2 = function (nums) {
	let target = nums.reduce((a, b) => a + b),
		sum = 0;

	nums.sort((a, b) => a - b);

	if (target % 2 || nums[nums.length - 1] > target / 2 || nums.length === 1)
		return false;

	target /= 2;
	if (nums[nums.length - 1] === target) return true;

	let canPart = false;
	const dfs = () => {
		if (canPart) return;
		for (let i = nums.length - 2; i > -1; i--) {
			const num = nums[i];
			if (num < 0) continue;
			nums[i] = -1;
			sum += num;
			if (sum === target) canPart = true;
			if (sum < target) dfs();
			nums[i] = num;
			sum -= num;
		}
	};
	dfs();
	return canPart;
};
// console.log(canPartition([100, 200, 100, 100, 100, 100, 100]));
