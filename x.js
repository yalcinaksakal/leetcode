/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
	let res = 0;
	const countBits = str => {
		let z = 0,
			o = 0,
			i = -1;
		while (z < m && o < n && ++i < str.length) str[i] === "0" ? z++ : o++;
		return [z, o];
	};
	for (const str of strs) {
		const [z, o] = countBits(str);
		z < m && o < n && res++;
	}
	return res;
};
