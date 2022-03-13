/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	this.presum = {};
	this.presum[-1] = 0;
	for (let i = 0; i < nums.length; i++)
		this.presum[i] = this.presum[i - 1] + nums[i];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
	return this.presum[right] - this.presum[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
