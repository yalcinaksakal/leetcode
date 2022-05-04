/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
	let start = -1,
		end = -1,
		max = -(10 ** 5 + 1),
		startNum;
	const handle = i => {
		if (start === -1 || startNum > nums[i]) {
			let j = 0;
			if (start === -1) j = i;
			else while (nums[j] <= nums[i]) j++;
			start = j;
			startNum = nums[i];
		}
		end = i;
	};
	for (let i = 0; i < nums.length; i++)
		nums[i] >= max ? (max = nums[i]) : handle(i);

	return start === -1 ? 0 : end - start + 1;
};

console.log(findUnsortedSubarray([1, 3, 5, 4, 2]));
