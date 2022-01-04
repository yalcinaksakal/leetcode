/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
	const comp = {};
	let res = 0,
		j;
	for (let i = 0; i < time.length; i++) {
		time[i] %= 60;
		j = time[i];
		comp[j] ? comp[j].push(i) : (comp[j] = [i]);
	}

	for (let i = 0; i < time.length; i++) {
		j = (60 - time[i]) % 60;
		if (comp[j]) res += comp[j].reduce((a, c) => a + (c > i ? 1 : 0), 0);
	}
	return res;
};

numPairsDivisibleBy60([30, 20, 150, 100, 40]);
numPairsDivisibleBy60([60, 60, 60, 60, 60]);
