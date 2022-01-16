/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
	let max = 0;

	const getMax = (s, e, inc) => {
		let curProd = 1,
			l = 0;

		for (let i = s; s ? i > e : i < e; i += inc) {
			curProd *= nums[i];
			l++;
			if (!curProd) {
				curProd = 1;
				l = 0;
			} else if (curProd > 0 && l > max) max = l;
		}
	};

	getMax(0, nums.length, 1);
	getMax(nums.length - 1, -1, -1);

	return max;
};
