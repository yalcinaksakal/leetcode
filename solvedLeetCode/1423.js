/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
	const lengthOfExcludedSub = cardPoints.length - k;
	let windwSum = 0;
	for (let i = 0; i < lengthOfExcludedSub; i++) windwSum += cardPoints[i];
	let minWindowSum = windwSum,
		total = windwSum;
	for (let i = lengthOfExcludedSub; i < cardPoints.length; i++) {
		windwSum += cardPoints[i] - cardPoints[i - lengthOfExcludedSub];
		minWindowSum = Math.min(minWindowSum, windwSum);
		total += cardPoints[i];
	}
	return total - minWindowSum;
};
maxScore([1, 2, 3, 4, 5, 6, 1], 3);
