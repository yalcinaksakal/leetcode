function noPrefix(words) {
	// Write your code here
	const trie = {},
		add = word => {
			let obj = trie,
				ch,
				i;
			for (i = 0; i < word.length - 1; i++) {
				ch = word[i];
				if (!obj[ch]) obj[ch] = {};
				else if (obj[ch].self) return true;
				obj = obj[ch];
			}
			if (obj[word[i]]) return true;
			obj[word[i]] = {};
			obj = obj[word[i]];
			obj["self"] = true;
			return false;
		};

	for (const w of words)
		if (add(w)) {
			console.log("BAD SET");
			console.log(w);
			return;
		}

	console.log("GOOD SET");
}
noPrefix([
	"dfbacgjecgfjcaejghacjdhcchj",
	"jjffdbeeejiehjdidbbdgidcaeejjdeiicibjfjgjjchedci",
	"jhjfbjbhijbcgefgbbgdjbihcehfbgdeaie",
	"jjddfcjaebdfbeaehaecibdbdcibebjbfgjidijhbjche",
	"eiejiajeiefadghfffdh",
	"gfdcdfjhiebfgicgfcghgicbabbaadbaj",
	"gdjfbbhgieabiejajaefdfjdiadbieheiddeegie",
	"hffedadc",
	"g",
	"adgahjcbihhgg",
	"jcaafdicjhbejbdjbbhehad",
	"jdedibfadddaahbagcgehhdiifddefgefhgecegfjecbdchc",
	"eifebiej",
]);

noPrefix([
	"aab",
	"defgab",
	"abcde",
	"aabcde",
	"cedaaa",
	"bbbbbbbbbb",
	"jabjjjad",
]);
