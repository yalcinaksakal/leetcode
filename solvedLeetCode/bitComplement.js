/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
	let res = "",
		i;
	n = n.toString(2);

	for (i = 0; i < n.length; i++) res = res + (1 - n[i]);
	i = 0;

	while (res[i] == 0 && i < res.length - 1) i++;

	return parseInt(res.slice(i), 2);
};

console.log(bitwiseComplement(7));
