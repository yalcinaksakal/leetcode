/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
	let dict = {};
	for (const s of arr) dict[s] ? dict[s]++ : (dict[s] = 1);
	dict = Object.keys(dict).filter(key => dict[key] < 2);
	return k > dict.length ? "" : dict[k - 1];
};
console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
