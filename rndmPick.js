/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
	this.nums = {};
	for (let i = 0; i < nums.length; i++)
		this.nums[nums[i]]
			? this.nums[nums[i]].push(i)
			: (this.nums[nums[i]] = [i]);
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
	target = this.nums[target];
	return target.length == 1
		? target[0]
		: target[Math.floor(Math.random() * target.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
