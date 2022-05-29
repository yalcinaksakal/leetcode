/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let missing = nums.length;
	nums.push("x");
	for (let i = 0; i < nums.length; i++)
		while (nums[i] !== i && nums[i] !== "x") {
			[nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
			nums[i] === "x" && (missing = i);
		}
	return missing;
};
