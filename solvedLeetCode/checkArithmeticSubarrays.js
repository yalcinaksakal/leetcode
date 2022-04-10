/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
	const res = [],
		check = (i, j) => {
			const arr = nums.slice(i, j + 1).sort((a, b) => a - b),
				delta = arr[1] - arr[0];
			for (let i = 2; i < arr.length; i++)
				if (arr[i] - arr[i - 1] !== delta) return false;
			return true;
		};

	for (let x = 0; x < l.length; x++) res.push(check(l[x], r[x]));
	return res;
};

checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]);
