/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
	let count = 0;
	const preXor = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			preXor[j] ^= arr[i];
			!preXor[j] && (count += i - j);
		}
		preXor.push(arr[i]);
	}

	return count;
};
countTriplets([2, 3, 1, 6, 7]);
