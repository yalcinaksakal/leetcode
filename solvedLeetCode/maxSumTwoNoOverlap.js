/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
	const getPresum = (list, type = 0) => {
		const first = {},
			second = {},
			l = nums.length - 1;

		let sum1 = 0,
			sum2 = 0,
			max1,
			max2;

		for (let i = 0; i <= l; i++) {
			sum1 += list[i];
			sum2 += list[i];
			if (i + 1 == firstLen) max1 = sum1;
			if (i + 1 == secondLen) max2 = sum2;
			if (i + 1 >= firstLen) {
				i + 1 > firstLen && (sum1 -= list[i - firstLen]);
				max1 = Math.max(max1, sum1);
				first[type ? l - i : i] = max1;
			}
			if (i + 1 >= secondLen) {
				i + 1 > secondLen && (sum2 -= list[i - secondLen]);
				max2 = Math.max(max2, sum2);
				second[type ? l - i : i] = max2;
			}
		}
		return { first, second };
	};
	const { first, second } = getPresum(nums, 0),
		{ first: firstR, second: secondR } = getPresum([...nums].reverse(), 1),
		l = nums.length;
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		if (i + 1 >= firstLen && i < l - secondLen)
			max = Math.max(max, first[i] + secondR[i + 1]);
		if (i + 1 >= secondLen && i < l - firstLen)
			max = Math.max(max, second[i] + firstR[i + 1]);
	}

	return max;
};
console.log(maxSumTwoNoOverlap([1, 0, 3], 1, 2));
