/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
	const map = {};

	for (let i = 0; i < arr.length; i++) map[arr[i]] = i;

	let count = 0,
		i,
		j;

	for (const p of pieces)
		if (map[p[0]] != undefined) {
			i = map[p[0]];
			j = 0;
			while (arr[i] == p[j] && j < p.length) {
				i++;
				j++;
			}
			if (j == p.length) count += j;
		}

	return count == arr.length;
};
