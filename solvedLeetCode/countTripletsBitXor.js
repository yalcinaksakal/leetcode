/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
	const preXor = {},
		postXor = {};
	let count, j;
	preXor[-1] = {};
	postXor[arr.length] = {};

	for (let i = 0; i < arr.length; i++) {
		j = arr.length - i - 1;
		preXor[i] = {};
		postXor[j] = {};
		for (let x of Object.keys(preXor[i - 1])) {
			count = preXor[i - 1][x];
			x = +x ^ arr[i];
			preXor[i][x] ? (preXor[i][x] += count) : (preXor[i][x] = count);
		}
		preXor[i][arr[i]] ? preXor[i][arr[i]]++ : (preXor[i][arr[i]] = 1);
		for (let x of Object.keys(postXor[j + 1])) {
			count = postXor[j + 1][x];
			x = arr[j] ^ +x;
			postXor[j][x] ? (postXor[j][x] += count) : (postXor[j][x] = count);
		}
		postXor[j][arr[j]] ? postXor[j][arr[j]]++ : (postXor[j][arr[j]] = 1);
	}
	count = 0;
	for (let i = 1; i < arr.length; i++)
		for (const [x, c] of Object.entries(preXor[i - 1]))
			count += c * (postXor[i][x] ? postXor[i][x] : 0);
	return count;
};
countTriplets([2, 3, 1, 6, 7]);
