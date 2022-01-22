/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
	this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
	return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
	const res = [...this.nums];
	let i = res.length,
		rndI;

	while (i) {
		rndI = Math.floor(Math.random() * i);
		i--;
		[res[i], res[rndI]] = [res[rndI], res[i]];
	}

	return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
