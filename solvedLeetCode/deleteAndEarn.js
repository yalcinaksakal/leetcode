/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
	const map = {},
		uniqNums = [];

	for (const num of nums)
		if (map[num]) map[num] += num;
		else {
			uniqNums.push(num);
			map[num] = num;
		}

	uniqNums.sort((a, b) => a - b);

	if (uniqNums.length < 2) return map[uniqNums[0]];

	let temp,
		point1 = map[uniqNums[0]],
		point2 =
			uniqNums[1] - 1 === uniqNums[0]
				? Math.max(point1, map[uniqNums[1]])
				: point1 + map[uniqNums[1]];

	for (let i = 2; i < uniqNums.length; i++) {
		if (uniqNums[i - 1] + 1 !== uniqNums[i]) {
			point1 = point2;
			point2 += map[uniqNums[i]];
			continue;
		}
		temp = point1;
		point1 = point2;
		point2 = Math.max(temp + map[uniqNums[i]], point2);
	}

	return point2;
};
console.log(deleteAndEarn([2, 2, 2, 2, 4]));
