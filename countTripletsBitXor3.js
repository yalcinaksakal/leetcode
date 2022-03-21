/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
	let count = 0,
		prev = [];

	for (let i = 0; i < arr.length; i++) {
		const cur = [];
		for (let x of prev) {
			x = x ^ arr[i];
			!x && (count += i - cur.length);
			cur.push(x);
		}
		cur.push(arr[i]);
		prev = cur;
	}

	return count;
};
countTriplets([2, 3, 1, 6, 7]);
