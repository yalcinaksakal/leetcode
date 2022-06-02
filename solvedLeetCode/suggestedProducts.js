/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
	const res = [],
		trie = {},
		insert = product => {
			let products = trie;
			for (let ch of product) {
				!products[ch] && (products[ch] = {});
				products = products[ch];
			}
			products.self = true;
		},
		get3Products = (prefixTrie, prefix) => {
			let ch;
			const productsOfPrefix = [],
				traverse = (curTrie, curPrefix) => {
					if (!curTrie || productsOfPrefix.length === 3) return;
					curTrie.self && productsOfPrefix.push(curPrefix);
					for (let i = 0; i < 26; i++) {
						ch = String.fromCharCode(i + 97);
						traverse(curTrie[ch], curPrefix + ch);
						if (productsOfPrefix.length === 3) break;
					}
				};
			traverse(prefixTrie, prefix);
			return productsOfPrefix;
		};
	let prefixTrie = trie,
		prefix = "";
	for (const product of products) insert(product);
	for (const ch of searchWord) {
		prefixTrie && (prefixTrie = prefixTrie[ch]);
		prefix += ch;
		res.push(prefixTrie ? get3Products(prefixTrie, prefix) : []);
	}
	return res;
};
