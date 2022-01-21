/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const mag = {};
	for (const c of magazine) mag[c] ? mag[c]++ : (mag[c] = 1);
	for (const c of ransomNote)
		if (mag[c]) mag[c]--;
		else return false;

	return true;
};
