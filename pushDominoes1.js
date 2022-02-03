/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
	const pushed = {};
	dominoes = dominoes.split("");
	let next;

	const handlePush = (i, dir, opDir) => {
		const sign = dir == "L" ? -1 : 1;
		delete pushed[i];
		i += sign;
		if (pushed[i] == opDir || pushed[i + sign] == opDir)
			pushed[i] == opDir ? delete pushed[i] : delete pushed[i + sign];
		else if ((dir == "L" ? i > -1 : i < dominoes.length) && dominoes[i] == ".")
			next.push([i, dir]);
	};

	const push = () => {
		const keys = Object.keys(pushed);
		next = [];
		if (!keys.length) return;
		for (const i of keys)
			if (pushed[i]) handlePush(+i, pushed[i], pushed[i] == "L" ? "R" : "L");
		for (const [k, v] of next) {
			dominoes[k] = v;
			pushed[k] = v;
		}
		push();
	};

	for (let i = 0; i < dominoes.length; i++)
		(dominoes[i] == "L" || dominoes[i] == "R") && (pushed[i] = dominoes[i]);
	push();
	return dominoes.join("");
};
console.log(pushDominoes(".L.R...LR..L.."));
// console.log(pushDominoes("R."));
