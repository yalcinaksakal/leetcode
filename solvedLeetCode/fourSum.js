/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	const current = [],
		map = {},
		res = [];

	let num;

	const dfs = () => {
		if (current.length === 4) {
			if (target === 0) {
				current.sort((a, b) => a - b);
				// if (!map[current.join(".")]) {
				res.push([...current]);
				map[current.join(".")] = 1;
				// }
			}
			return;
		}

		for (let i = 0; i < nums.length; i++) {
			num = nums[i];
			if (num === null) continue;
			current.push(num);
			nums[i] = null;
			target -= num;
			dfs();
			nums[i] = current.pop();
			target += nums[i];
		}
	};

	dfs();
	console.log(map);
	return res;
};
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
