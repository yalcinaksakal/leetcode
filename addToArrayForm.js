/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
	let i = num.length - 1,
		sum = 0;
	while (k || sum) {
		sum += k % 10;
		if (i > -1) {
			sum += num[i];
			num[i--] = sum % 10;
		} else num.unshift(sum % 10);
		sum = Math.floor(sum / 10);
		k = Math.floor(k / 10);
	}

	return num;
};
addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1);
