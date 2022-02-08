/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
	let left = { sum: 0, count: 0 },
		right = { sum: 0, count: 0 };
	const half = num.length / 2;

	for (let i = 0; i < num.length; i++)
		i < half
			? num[i] == "?"
				? left.count++
				: (left.sum += +num[i])
			: num[i] == "?"
			? right.count++
			: (right.sum += +num[i]);

	const alice = Math.ceil((left.count + right.count) / 2);

	const checkIntersection = (lMin, lMax, rMin, rMax) =>
		Math.min(lMax, rMax) >= Math.max(lMin, rMin);

	const isIntersecting = (l, r) =>
		checkIntersection(
			left.sum,
			left.sum + (left.count - l) * 9,
			right.sum + r * 9,
			right.sum + right.count * 9
		)
			? checkIntersection(
					left.sum + 9 * l,
					left.sum + left.count * 9,
					right.sum,
					right.sum + (right.count - r) * 9
			  )
			: false;

	for (let i = 0; i <= alice; i++)
		if (
			i <= left.count &&
			alice - i <= right.count &&
			!isIntersecting(i, alice - i)
		)
			return true;

	return false;
};

console.log(
	sumGame(
		"?0?3105????1834??7382?997?3?????7?63116?566?701?065?13?3??38?7?488?????9"
	)
);
// ?329 5???
//  9?   ???
// 9-18  0-27

// 25 ??
// 7  0-18

// 753?12 ??121?
//   14-23  0-27
