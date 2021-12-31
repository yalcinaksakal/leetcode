/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const res = [];
	const cur = [];

	const process = () => {
		if (cur.length === nums.length) {
			res.push([...cur]);
			return;
		}
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] === null) continue;
			cur.push(nums[i]);
			nums[i] = null;
			process();
			nums[i] = cur.pop();
		}
	};

	process();
	console.log(res);
	return res;
};

permute([1, 2, 3, 4]);
