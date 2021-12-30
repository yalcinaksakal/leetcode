/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
	const res = [],
		cur = [],
		map = {};

	const process = start => {
		if (cur.length > 1 && !map[cur]) {
			res.push([...cur]);
			map[cur] = 1;
		}
		for (let i = start; i < nums.length; i++) {
			if (nums[i] === null) continue;
			if (cur.length && nums[i] < cur[cur.length - 1]) continue;
			cur.push(nums[i]);
			process(i + 1);
			cur.pop();
		}
	};

	process(0);
	// console.log(res);
	return res;
};
