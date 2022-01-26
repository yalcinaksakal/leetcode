/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const res = [],
		cur = [];

	const perm = () => {
		if (cur.length == nums.length) {
			res.push([...cur]);
			return;
		}
		let tmp;
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] == null) continue;
			tmp = nums[i];
			nums[i] = null;
			cur.push(tmp);
			perm();
			cur.pop();
			nums[i] = tmp;
		}
	};

	perm();

	return res;
};
