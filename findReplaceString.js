/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
	let res = "",
		start = 0,
		x,
		source,
		t;

	for (let i = 0; i < indices.length; i++)
		indices[i] = { i: indices[i], s: sources[i], t: targets[i] };
	indices.sort((a, b) => a.i - b.i);

	for (let i = 0; i < indices.length; i++) {
		x = indices[i].i;
		source = indices[i].s;
		t = indices[i].t;

		if (s.slice(x, x + source.length) == source) {
			res += s.slice(start, x) + t;
			start = x + source.length;
		}
	}
	res += s.slice(start);
	return res;
};
