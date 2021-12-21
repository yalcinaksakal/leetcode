/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function (n) {
	if (n < 4) return n;

	let i = 0,
		max = 0,
		remaining;

	const calc = n => (n * (n + 1)) / 2;

	while (max < n) max += calc(++i);

	if (max === n) return calc(i);

	max -= calc(i);
	remaining = n - max;
	max = calc(i - 1);
	i = 0;
	while (calc(i) < remaining) i++;

	return max + i;
};

console.log(minimumBoxes(15));
