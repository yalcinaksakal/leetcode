/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
	const limit = {},
		comb = [];
	for (let i = 0; i < values.length; i++) {
		limit[labels[i]] = useLimit;
		comb.push({ v: values[i], l: labels[i] });
	}
	comb.sort((a, b) => a.v - b.v);
	let sum = 0,
		count = 0;
	while (comb.length) {
		const next = comb.pop();
		if (limit[next.l]) {
			count++;
			sum += next.v;
			if (count == numWanted) return sum;
			limit[next.l]--;
		}
	}
	return sum;
};
console.log(largestValsFromLabels([2, 6, 3, 6, 5], [1, 1, 2, 1, 1], 3, 1));
