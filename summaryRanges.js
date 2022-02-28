/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	let start = 0,
		end = -1;
	const res = [];
	nums.push(nums[0]);
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;
		if (nums[i] === nums[i - 1] + 1) {
			end = i;
			continue;
		}
		res.push(nums[start] + (end === -1 ? "" : "->" + nums[end]));
		end = -1;
		start = i;
	}

	return res;
};
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
