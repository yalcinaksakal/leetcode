/**
 * @param {number[]} arr
 * @return {number}
 */

var numOfSubarrays = function (arr) {
	const mod = 10 ** 9 + 7;
	let count = 0,
		odd = 0,
		even = 0;
	for (num of arr) {
		num & i ? ([odd, even] = [even + 1, odd]) : even++;
		count += odd;
		count %= mod;
	}
	return count;
};

var numOfSubarrays1 = function (arr) {
	const countOdds = {},
		mod = 10 ** 9 + 7;
	countOdds[-1] = 0;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		arr[i] % 2 && count++;
		count %= 2;
		countOdds[i] = count;
	}

	count = 0;
	for (let length = 1; length <= arr.length; length++)
		for (let j = 0; j < arr.length - length + 1; j++) {
			(countOdds[j + length - 1] - countOdds[j - 1]) % 2 && count++;
			count %= mod;
		}
	return count;
};
