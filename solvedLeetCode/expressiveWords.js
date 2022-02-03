/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
	let check,
		count = 0;

	const createWMap = w => {
		const repeatCount = [];
		let key = "",
			l = 1;
		for (let i = 1; i <= w.length; i++)
			if (w[i] !== w[i - 1]) {
				key += w[i - 1];
				repeatCount.push(l);
				l = 1;
			} else l++;
		return { key, repeatCount };
	};
	s = createWMap(s);
	for (let w of words) {
		w = createWMap(w);
		if (w.key != s.key) continue;
		check = true;
		for (let i = 0; i < w.key.length; i++)
			if (
				(s.repeatCount[i] < 3 && s.repeatCount[i] != w.repeatCount[i]) ||
				s.repeatCount[i] < w.repeatCount[i]
			) {
				check = false;
				break;
			}
		check && count++;
	}
	return count;
};

expressiveWords("heeellooo", ["hello", "hi", "helo"]);
