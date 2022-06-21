/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
	const isPSubSeq = removedIndices => {
		let i = 0;
		for (let j = 0; j < s.length; j++)
			if (!removedIndices.has(j) && p[i] === s[j] && ++i == p.length)
				return true;
		return false;
	};
	let low = 0,
		high = removable.length,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		isPSubSeq(new Set(removable.slice(0, mid)))
			? (low = mid + 1)
			: (high = mid);
	}
	return isPSubSeq(new Set(removable.slice(0, low))) ? low : low - 1;
};
console.log(maximumRemovals("abcacb", "ab", [3, 1, 0]));
