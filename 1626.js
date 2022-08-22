/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
	const players = ages
			.map((age, i) => ({ age, score: scores[i] }))
			.sort((a, b) => {
				if (a.age < b.age) return -1;
				if (a.age === b.age && a.score < b.score) return -1;
				return 0;
			}),
		dp = players.map(p => p.score);
	let bestScore = dp[0];
	for (let i = 1; i < players.length; i++) {
		for (let j = 0; j < i; j++)
			if (
				(players[i].score >= players[j].score ||
					players[i].age === players[j].age) &&
				dp[i] < players[i].score + dp[j]
			)
				dp[i] = players[i].score + dp[j];
		bestScore = Math.max(bestScore, dp[i]);
	}
	return bestScore;
};

console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]));
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]));
console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1]));
console.log(
	bestTeamScore(
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[811, 364, 124, 873, 790, 656, 581, 446, 885, 134]
	)
);
console.log(
	bestTeamScore([1, 3, 7, 3, 2, 4, 10, 7, 5], [4, 5, 2, 1, 1, 2, 4, 1, 4])
);
