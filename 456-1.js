/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
	const preMins = Array(nums.length).fill(0),
		postMaxLessThanCur = Array(nums.length).fill(0),
		sortedPost = [nums.pop()],
		push = num => {
			let low = 0,
				mid,
				high = sortedPost.length - 1;
			while (low < high) {
				mid = (low + high) >>> 1;
				sortedPost[mid] < num ? (low = mid + 1) : (high = mid);
			}
			num > sortedPost[low] && low++;
			sortedPost.splice(low, 0, num);
			return low ? sortedPost[low - 1] : -(10 ** 9);
		};
	let preMin = nums[0];

	for (let i = 1; i < nums.length; i++) {
		preMins[i] = preMin;
		preMin = Math.min(preMin, nums[i]);
		postMaxLessThanCur[nums.length - i] = push(nums[nums.length - i]);
	}
	for (let i = 1; i < nums.length; i++)
		if (nums[i] > preMins[i] && postMaxLessThanCur[i] > preMins[i]) return true;

	return false;
};
console.log(find132pattern([3, 1, 4, 2, 5, 6, 7, 3, 4]));
