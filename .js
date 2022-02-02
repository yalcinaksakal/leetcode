/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
	const j = {};
	for (const c of jewels) j[c] = 1;
	let res = 0;
	for (const c of stones) j[c] && res++;
	return res;
};
