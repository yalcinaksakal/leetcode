/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
	let max = 0;

	const getMax = () => {
		let curProd = 1,
			start = 0,
			end = 0,
			num;
		for (let i = 0; i < nums.length; i++) {
			num = nums[i];
			if (!curProd) {
				curProd = 1;
				start = i;
				end = i;
			}
			curProd *= num;
			end++;
			if (curProd > 0) max = Math.max(end - start, max);
		}
	};

	getMax();
	nums.reverse();
	getMax();

	return max;
};

getMaxLen([0, 1, -2, -3, -4]);
