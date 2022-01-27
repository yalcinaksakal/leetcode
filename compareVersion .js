/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (v1, v2) {
	const getVals = s => s.split(".").map(v => +v);

	const compare = (v1, v2) => {
		let r1,
			r2,
			l = Math.max(v1.length, v2.length);

		for (let i = 0; i < l; i++) {
			r1 = v1[i] ? v1[i] : 0;
			r2 = v2[i] ? v2[i] : 0;
			if (r1 < r2) return -1;
			if (r1 > r2) return 1;
		}

		return 0;
	};
	return compare(getVals(v1), getVals(v2));
};
