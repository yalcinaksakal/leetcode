/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
	const nums2 = new Set(arr2),
		check = n => {
			for (let i = n - d, last = n + d + 1; i < last; i++)
				if (nums2.has(i)) return false;
			return true;
		};
	return arr1.reduce((a, c) => (check(c) ? a + 1 : a), 0);
};
