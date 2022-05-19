/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function (nums, queries) {
	const res = [],
		numsTillIndex = {},
		getDif = (left, right) => {
			let pre = -100,
				cur = 100;
			for (let i = 1; i < 101; i++)
				if (numsTillIndex[right][i] - numsTillIndex[left - 1][i]) {
					cur = Math.min(cur, i - pre);
					if (cur === 1) return 1;
					pre = i;
				}
			return cur >= 100 ? -1 : cur;
		};
	numsTillIndex[-1] = Array(101).fill(0);
	for (let i = 0; i < nums.length; i++) {
		numsTillIndex[i] = [...numsTillIndex[i - 1]];
		numsTillIndex[i][nums[i]]++;
	}

	for (const range of queries) res.push(getDif(...range));

	return res;
};
