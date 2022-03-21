/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
	const xor = {};
	let count = 0,
		j;

	for (let l = 1; l <= arr.length; l++)
		for (let i = 0; i < arr.length - l + 1; i++) {
			if (l === 1) {
				xor[i + "-" + i] = arr[i];
				continue;
			}
			j = i + l - 1;
			xor[i + "-" + j] = xor[i + "-" + (j - 1)] ^ arr[j];
			!xor[i + "-" + j] && (count += l - 1);
		}

	return count;
};
countTriplets([2, 3, 1, 6, 7]);
