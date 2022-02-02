/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
	const res = Array(nums.length);
	nums = nums.map((n, i) => ({ n, i })).sort((a, b) => a.n - b.n);
	let count = 0;
	res[nums[0].i] = 0;
	for (let i = 1; i < nums.length; i++) {
		nums[i].n != nums[i - 1].n && (count = i);
		res[nums[i].i] = count;
	}

	return res;
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
