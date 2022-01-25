var Trie = function () {
	this.dict = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	let obj = this.dict;
	for (const ch of word) {
		if (!obj[ch]) obj[ch] = {};
		obj = obj[ch];
	}
	obj["self"] = 1;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word, isPrefix) {
	let obj = this.dict;
	for (const ch of word) {
		if (!obj[ch]) return false;
		obj = obj[ch];
	}
	return isPrefix ? true : obj.self == 1;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	return this.search(prefix, true);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
