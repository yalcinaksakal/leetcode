const containsDuplicate = nums => nums.length !== new Set(nums).size;

console.log(containsDuplicate([1, 3, 5, 2]));
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let sum = nums[0],
		curSum = 0;
	for (const num of nums) {
		if (curSum < 0) curSum = 0;
		curSum += num;
		if (curSum > sum) sum = curSum;
	}
	return sum;
};
console.log(maxSubArray([-2, -1, -3, -4, 0, 2, -1, 5, -2]));
