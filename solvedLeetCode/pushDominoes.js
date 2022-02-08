/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
	let res = "",
		prev,
		length;
	for (let i = 0; i < dominoes.length; i++)
		if (dominoes[i] == "L") {
			if (!prev || prev.dir == "L") res += "L".repeat(i - (prev ? prev.i : 0));
			else {
				length = i - prev.i - 1;
				res +=
					"R".repeat(Math.floor(length / 2) + 1) +
					".".repeat(length % 2) +
					"L".repeat(Math.floor(length / 2));
			}
			prev = { i, dir: dominoes[i] };
		} else if (dominoes[i] == "R") {
			if (prev || i) {
				if (!prev || prev.dir == "L")
					res += (prev ? "L" : ".") + ".".repeat(i - (prev ? prev.i : 0) - 1);
				else res += "R".repeat(i - prev.i);
			}
			prev = { i, dir: dominoes[i] };
		}
	if (prev)
		res +=
			prev.dir +
			(prev.dir == "R" ? "R" : ".").repeat(dominoes.length - prev.i - 1);
	else res = ".".repeat(dominoes.length);

	return res;
};
console.log(pushDominoes("RR.L"));
// 0: {i: 1, dir: 'L'}
// 1: {i: 3, dir: 'R'}       r....l
// 2: {i: 7, dir: 'L'}       rr.
// 3: {i: 8, dir: 'R'}
// 4: {i: 11, dir: 'L'}
