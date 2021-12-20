/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let angrm;
	const res = [],
		map = {};

	for (let i = 0; i < strs.length; i++) {
		angrm = strs[i].split("").sort().join("");
		if (map[angrm]) map[angrm].push(strs[i]);
		else map[angrm] = [strs[i]];
	}

	return Object.values(map);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
