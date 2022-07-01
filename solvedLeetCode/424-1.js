/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	const memo = {},
		replacer = (index, curCh, curK, length) => {
			if (index === s.length - 1) return length;
			const key = [index, curCh, curK].join(",");
			if (memo[key]) return memo[key];
			//don't change the next char
			memo[key] = replacer(
				index + 1,
				s[index + 1],
				curK,
				curCh === s[index + 1] ? length + 1 : 1
			);
			//change next char to cur char
			if (curCh !== s[index + 1] && curK)
				memo[key] = Math.max(
					memo[key],
					replacer(index + 1, curCh, curK - 1, length + 1)
				);
			return memo[key];
		};
	replacer(0, s[0], k, 1);
	return memo;
};
console.log(characterReplacement("AABABBA", 1));
