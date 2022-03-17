/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
	const longestComSeq = (() => {
		const dp = Array(str1.length + 1)
			.fill()
			.map(() => Array(str2.length + 1).fill(""));

		for (let i = str1.length - 1; i > -1; i--)
			for (let j = str2.length - 1; j > -1; j--)
				dp[i][j] =
					str1[i] === str2[j]
						? str1[i] + dp[i + 1][j + 1]
						: dp[i + 1][j].length > dp[i][j + 1].length
						? dp[i + 1][j]
						: dp[i][j + 1];

		return dp[0][0];
	})();
	let res = "",
		i1 = 0,
		i2 = 0,
		iCom = 0;

	while (i1 < str1.length || i2 < str2.length) {
		if (iCom >= longestComSeq.length) {
			res += str1.slice(i1) + str2.slice(i2);
			break;
		}
		if (str1[i1] === longestComSeq[iCom] && str2[i2] === longestComSeq[iCom]) {
			res += longestComSeq[iCom++];
			i1++;
			i2++;
			continue;
		}

		if (i1 < str1.length && str1[i1] != longestComSeq[iCom]) res += str1[i1++];
		if (i2 < str2.length && str2[i2] != longestComSeq[iCom]) res += str2[i2++];
	}
	return res;
};
