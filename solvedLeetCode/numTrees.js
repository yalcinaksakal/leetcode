/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
	const cat = [];
	let newCat;
	cat.push(1, 1, 2);
	for (let i = 3; i <= n; i++) {
		newCat = 0;
		for (let j = 0; j < i; j++) newCat += cat[j] * cat[i - 1 - j];
		cat.push(newCat);
	}
	return cat[n];
};
console.log(numTrees(4));
