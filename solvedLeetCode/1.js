/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	const dp = {};
	let max = [];

	for (let i = 0; i < word1.length; i++)
		for (let j = 0; j <= i; j++) {
			if (word1[i] !== word2[j]) continue;
			if (dp[j - 1] && dp[j - 1][dp[j - 1].length - 1][1] < i)
				dp[j] = [...dp[j - 1], [j, i]];
			else dp[j] = [[j, i]];
		}
	console.log(dp);
};

minDistance("horse", "roese");
// horse ros
//     w2 w1
// r [[0,2]]
// o [[1,1]]
// s [[1,1],[2,3]]
// delete between 1-3, operate priors Math.max(), operate posts Math.max =3
