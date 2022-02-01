/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
	const swList = [[], []];
	const swap = (i, j) => {
		const tmp = nums[i];
		nums[i] = nums[j];
		nums[j] = tmp;
	};
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 == nums[i] % 2) continue;
		if (swList[(i + 1) % 2].length) swap(swList[(i + 1) % 2].pop(), i);
		else swList[i % 2].push(i);
	}

	return nums;
};
sortArrayByParityII([4, 1, 1, 0, 1, 0]);
