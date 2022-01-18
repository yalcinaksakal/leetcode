/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
	const n = tops.length,
		t = {},
		b = {};
	let dest,
		eq = n;

	for (let i = 0; i < n; i++) {
		if (tops[i] == bottoms[i]) {
			if (dest && dest != tops[i]) return -1;
			dest = tops[i];
			eq--;
			if (!eq) return 0;
			continue;
		}
		t[tops[i]] ? t[tops[i]]++ : (t[tops[i]] = 1);
		b[bottoms[i]] ? b[bottoms[i]]++ : (b[bottoms[i]] = 1);
	}
	let res = n;
	for (const k of Object.keys(t)) {
		if (dest && k != dest) continue;
		if (!b[k] || b[k] + t[k] != eq) continue;
		res = Math.min(res, b[k], t[k]);
	}

	return res == n ? -1 : res;
};

console.log(minDominoRotations([2, 5, 1, 1], [5, 2, 1, 1]));
