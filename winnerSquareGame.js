/**
 * @param {number} n
 * @return {boolean}
 */
//rec
var winnerSquareGame = function (n) {
	const dp = {};
	// if there exists 0 stone player loses
	dp[0] = false;

	const dfs = i => {
		if (dp[i] != undefined) return dp[i];
		dp[i] = false;
		let j = Math.floor(i ** 0.5);
		while (j) {
			if (!dfs(i - j ** 2)) {
				dp[i] = true;
				break;
			}
			j--;
		}
		return dp[i];
	};

	return dfs(n);
};
//iterative
var winnerSquareGame1 = function (n) {
	const dp = [false];
	let j;

	for (let i = 1; i <= n; i++) {
		dp.push(false);
		j = 1;
		while (j ** 2 <= i) {
			if (!dp[i - j ** 2]) {
				dp[i] = true;
				break;
			}
			j++;
		}
	}

	return dp[n];
};
