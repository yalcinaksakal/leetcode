/**
 * @param {number[]} satisfaction
 * @return {number}
 */

var maxSatisfaction = function (satisfaction) {
	satisfaction.sort((a, b) => a - b);
	const n = satisfaction.length;
	let prev = {};

	for (let i = n - 1; i > -1; i--) {
		const cur = {};
		for (let j = n - 1; j > -1; j--)
			cur[j] = Math.max(
				satisfaction[i] * (j + 1) + (prev[j + 1] ? prev[j + 1] : 0),
				prev[j] ? prev[j] : 0
			);
		prev = cur;
	}
	return prev[0];
};

var maxSatisfactionRec = function (satisfaction) {
	satisfaction.sort((a, b) => a - b);
	const n = satisfaction.length,
		memo = {},
		serve = (i, served) => {
			if (i === n) return 0;
			const key = i + "," + served;
			if (memo[key]) return memo[key];
			memo[key] = Math.max(
				serve(i + 1, served + 1) + satisfaction[i] * (served + 1),
				serve(i + 1, served)
			);
			return memo[key];
		};
	return serve(0, 0);
};
console.log(maxSatisfaction([4, 3, 2]));
