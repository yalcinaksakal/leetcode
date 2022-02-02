/**
 * @param {number[]} nums
 * @return {number}
 */
//  endIndex is the leftmost index of left part
//  maxIndex is max number's we encountered so far
//  maxCurrIndex is the max number's index in the left part
var partitionDisjoint = function (nums) {
	let maxCurrIndex = 0,
		maxIndex = 0,
		endIndex = 0;

	for (let i = 1; i < nums.length; i++)
		if (nums[i] < nums[maxCurrIndex]) {
			maxCurrIndex = maxIndex;
			endIndex = i;
		} else if (nums[i] > nums[maxIndex]) maxIndex = i;

	return endIndex + 1;
};
