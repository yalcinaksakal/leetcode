/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (o, m, n) {
	const res = [];
	if (o.length != m * n) return res;
	let r = -1;
	for (let i = 0; i < o.length; i++)
		if (i % n) res[r].push(o[i]);
		else {
			res.push([o[i]]);
			r++;
		}
	return res;
};
construct2DArray([1, 2], 1, 1);
