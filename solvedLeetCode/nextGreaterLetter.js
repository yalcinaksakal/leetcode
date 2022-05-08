/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	let low = 0,
		high = letters.length,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		if (letters[mid] < target) low = mid + 1;
		else high = mid;
	}
	while (letters[low] === target) low++;
	low === letters.length && (low = 0);
	return letters[low];
};
