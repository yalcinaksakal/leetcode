/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = (ransomNote, magazine) => {
	const chars = {};

	for (const ch of magazine) chars[ch] ? chars[ch]++ : (chars[ch] = 2);

	for (const ch of ransomNote) {
		if (!chars[ch] || chars[ch] === 1) return false;
		chars[ch]--;
	}

	return true;
};

canConstruct("aa", "aab");
