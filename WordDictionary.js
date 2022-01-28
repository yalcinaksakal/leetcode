var WordDictionary = function () {
	this.dict = {};
};

WordDictionary.prototype.addWord = function (word) {
	let obj = this.dict;
	for (const ch of word) {
		if (!obj[ch]) obj[ch] = {};
		obj = obj[ch];
	}
	obj["self"] = true;
};

WordDictionary.prototype.search = function (word) {
	const n = word.length;

	const traverse = (index, parent) => {
		for (let i = index; i < n; i++) {
			if (word[i] == ".") {
				for (const child of Object.keys(parent))
					if (i == n - 1 ? parent[child].self : traverse(i + 1, parent[child]))
						return true;
				return false;
			} else {
				if (i == n - 1) return parent[word[i]]?.self ? true : false;
				if (!parent[word[i]]) return false;
			}

			parent = parent[word[i]];
		}
		return true;
	};

	return traverse(0, this.dict);
};

const a = new WordDictionary();
a.addWord("bad");
a.addWord("dad");
a.addWord("mad");

console.log(a.search("pad"));
console.log(a.search("bad"));
console.log(a.search(".ad"));
console.log(a.search("b.."));
