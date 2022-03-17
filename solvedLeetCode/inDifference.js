/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function (nums, queries) {
	const res = [],
		preSum = {},
		getDif = (left, right) => {
			let pre = -100,
				cur = 100;
			for (let i = 1; i < 101; i++)
				if (preSum[right][i] - preSum[left - 1][i]) {
					cur = Math.min(cur, i - pre);
					if (cur === 1) break;
					pre = i;
				}
			return cur >= 100 ? -1 : cur;
		};
	preSum[-1] = Array(101).fill(0);
	for (let i = 0; i < nums.length; i++) {
		preSum[i] = [...preSum[i - 1]];
		preSum[i][nums[i]]++;
	}

	for (const range of queries) res.push(getDif(...range));

	return res;
};

minDifference(
	[1, 3, 4, 8],
	[
		[0, 1],
		[1, 2],
		[2, 3],
		[0, 3],
	]
);
