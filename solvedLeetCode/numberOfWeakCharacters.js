/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (props) {
	props.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));

	let i = props.length - 2,
		count = 0,
		max = props[i + 1][1],
		auxMax = 0;
	while (i > -1 && props[i][0] == props[i + 1][0])
		max = Math.max(max, props[i--][1]);

	while (i > -1) {
		props[i][1] < max && count++;
		if (i && props[i][0] == props[i - 1][0])
			auxMax = Math.max(auxMax, props[i][1]);
		else max = Math.max(max, props[i][1], auxMax);
		i--;
	}
	return count;
};
console.log(
	numberOfWeakCharacters([
		[7, 9],
		[10, 7],
		[6, 9],
		[10, 4],
		[7, 5],
		[7, 10],
	])
);
