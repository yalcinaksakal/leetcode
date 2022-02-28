function kaprekarNumbers(p, q) {
	const res = [],
		isKaprekar = n => {
			if (n == 1) return true;
			const sq = n ** 2 + "",
				d = Math.floor(sq.length / 2),
				first = +sq.slice(0, d),
				sec = +sq.slice(d);

			return sec && first + sec === n;
		};
	for (let i = p; i <= q; i++) if (isKaprekar(i)) res.push(i);
	console.log(res.length ? res.join(" ") : "INVALID RANGE");
}

kaprekarNumbers(297, 297);
