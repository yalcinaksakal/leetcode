/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
	const dp = Array(books.length).fill(Number.MAX_SAFE_INTEGER);
	let curHeight, tmp, j;
	dp[0] = books[0][1];
	for (let i = 1; i < books.length; i++) {
		curHeight = 0;
		tmp = shelfWidth;
		j = i;
		while (j > -1 && tmp - books[j][0] > -1) {
			curHeight = Math.max(books[j][1], curHeight);
			dp[i] = Math.min(dp[i], curHeight + (j ? dp[j - 1] : 0));
			tmp -= books[j--][0];
		}
	}
	return dp.pop();
};
console.log(
	minHeightShelves(
		[
			[1, 1],
			[2, 3],
			[2, 3],
			[1, 1],
			[1, 1],
			[1, 1],
			[1, 2],
		],
		4
	)
);
