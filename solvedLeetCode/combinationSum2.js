/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	const sums = [],
		res = [],
		map = {};
	sums.push({ sum: 0, chosens: [] });

	let newSum, length;

	for (const candidate of candidates) {
		length = sums.length;
		for (let i = 0; i < length; i++) {
			newSum = candidate + sums[i].sum;
			if (newSum > target) continue;
			newSum = {
				sum: newSum,
				chosens: [...sums[i].chosens, candidate].sort((a, b) => a - b),
			};
			if (!map[newSum.chosens]) {
				sums.push(newSum);
				map[newSum.chosens] = 1;
				if (newSum.sum === target) res.push(newSum.chosens);
			}
		}
	}

	return res;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
