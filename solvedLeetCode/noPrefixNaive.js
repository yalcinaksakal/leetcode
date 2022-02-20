function noPrefix(words) {
	// Write your code here
	const prefixes = {},
		badSet = index => {
			if (res == -1 || res > index) res = index;
		};
	let prefix,
		word,
		res = -1;
	for (let i = 0; i < words.length; i++)
		!prefixes[words[i]] && (prefixes[words[i]] = i);

	for (let i = 0; i < words.length; i++) {
		prefix = "";
		word = words[i];
		for (const ch of word) {
			prefix += ch;
			if (prefixes[prefix] !== undefined && prefixes[prefix] !== i)
				badSet(Math.max(i, prefixes[prefix]));
		}
	}
	console.log(res === -1 ? "GOOD SET" : "BAD SET");
	if (res !== -1) console.log(words[res]);
}
// aab is a prefix of aabsds
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
