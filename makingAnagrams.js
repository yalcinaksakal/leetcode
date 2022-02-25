function makingAnagrams(s1, s2) {
	const map = {};
	let res = s1.length + s2.length;
	for (const ch of s1) map[ch] ? map[ch]++ : (map[ch] = 1);
	for (const ch of s2)
		if (map[ch]) {
			map[ch]--;
			res -= 2;
		}

	return res;
}
