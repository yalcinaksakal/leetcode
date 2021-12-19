/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum1 = function (nums, target) {
	let sums = [{ sum: 0, nums: [] }],
		comp = {},
		res = [];

	let l, tmp, sum, l1;
	const twoSum = arr => {
		for (const num of arr) {
			l = sums.length;
			for (let i = 0; i < l; i++) {
				l1 = sums[i].nums.length;
				sum = sums[i].sum + num;
				if (l1 === 2) continue;
				tmp = [...sums[i].nums, num];
				sums.push({ sum, nums: [...tmp] });
				if (l1 === 1) {
					if (comp[sum]) comp[sum].push([...tmp]);
					else comp[sum] = [[...tmp]];
				}
			}
		}
		sums = sums.filter(s => s.nums.length === 2);
	};

	twoSum(nums);

	console.log(Object.values(comp).filter(a => a.length > 1));
	return res;
};

var fourSum = function (nums, target) {
	const sums = [{ sum: 0, nums: [] }],
		map = {},
		res = [];

	nums.sort((a, b) => a - b);

	let l, tmp, sum, l1;
	console.log(nums);
	for (const num of nums) {
		l = sums.length;
		for (let i = 0; i < l; i++) {
			l1 = sums[i].nums.length;
			sum = sums[i].sum + num;
			tmp = [...sums[i].nums, num];

			if (l1 === 3) {
				if (sum > target) break;
				if (sum !== target) continue;
				if (map[tmp]) continue;
				map[tmp] = 1;
				res.push([...tmp]);
			} else sums.push({ sum, nums: [...tmp] });
		}
		sums.sort((a, b) => a.sum - b.sum);
	}

	return res;
};
console.log(
	fourSum([-6, -6, -2, 8, 1, -3, -4, -2, -4, 0, -5, -6, 6, 9, 3, 9, 0], -14)
);
