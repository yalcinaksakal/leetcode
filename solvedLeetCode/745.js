/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
	this.dict = {};
	let word, obj;
	for (let i = 0; i < words.length; i++) {
		word = "." + words[i];
		for (let j = words[i].length - 1; j > -1; j--) {
			obj = this.dict;
			word = words[i][j] + word;
			for (const ch of word) {
				if (!obj[ch]) obj[ch] = {};
				obj = obj[ch];
				obj.index = i;
			}
		}
	}
};
/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {
	let obj = this.dict;
	const word = suffix + "." + prefix;
	for (const ch of word) {
		if (!obj[ch]) return -1;
		obj = obj[ch];
	}
	return obj.index;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
const f = new WordFilter(["asdad", "dsd"]);
console.log(f);
