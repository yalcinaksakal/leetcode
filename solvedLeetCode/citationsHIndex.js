/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	citations.sort((a, b) => b - a);
	for (let i = citations.length - 1; i > -1; i--)
		if (citations[i] >= i + 1) return i + 1;
	return 0;
};
