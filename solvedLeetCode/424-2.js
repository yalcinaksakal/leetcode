/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	const memo = {},
		replacer = (index, curCh, curK) => {
			if (curK < 0) return -1;
			if (index === s.length - 1) return 1;

			const key = [index, curCh, curK].join(",");
			if (memo[key]) return memo[key];
			memo[key] =
				curCh === s[index + 1]
					? 1 + replacer(index + 1, curCh, curK)
					: Math.max(
							//change curchar to nexchar
							replacer(index, s[index + 1], curK - 1),
							//change nextchar to curChar
							1 + replacer(index + 1, curCh, curK - 1),
							//do not make any change
							replacer(index + 1, s[index + 1], curK)
					  );
			return memo[key];
		};
	replacer(0, s[0], k);
	return memo;
};
console.log(characterReplacement("AABABBA", 0));
