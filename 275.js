/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	let low = 0,
		high = citations.length - 1,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		citations[mid] < citations.length - mid ? (low = mid + 1) : (high = mid);
	}
	citations[low] < citations.length - low && low++;
	return citations.length - low;
};
console.log(hIndex([0]));
