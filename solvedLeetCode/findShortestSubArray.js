/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
	const map = {};
	let res = { freq: 0, start: 0, end: 0 };

	for (let i = 0; i < nums.length; i++)
		if (map[nums[i]]) {
			map[nums[i]].freq++;
			map[nums[i]].end = i;
			if (
				map[nums[i]].freq > res.freq ||
				(map[nums[i]].freq === res.freq &&
					map[nums[i]].end - map[nums[i]].start < res.end - res.start)
			)
				res = map[nums[i]];
		} else map[nums[i]] = { freq: 1, start: i, end: i };

	return res.end - res.start + 1;
};
