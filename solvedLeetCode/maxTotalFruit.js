/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
	//find start pos
	let low = 0,
		mid,
		high = fruits.length - 1;
	while (low < high) {
		mid = (low + high) >>> 1;
		if (fruits[mid][0] < startPos) low = mid + 1;
		else high = mid;
	}

	let total = 0,
		left = low - 1,
		right = low,
		max = 0;

	if (!low && startPos > fruits[low][0]) {
		left = 0;
		right = 1;
	}

	if (fruits[low][0] === startPos) {
		total = fruits[low][1];
		fruits[low][1] = 0;
		right++;
	}

	const harvest = (l, r) => {
		let tmpF, tmpS, d;

		max = Math.max(total, max);

		while (r < fruits.length && !fruits[r][1]) r++;
		while (l > -1 && !fruits[l][1]) l--;

		//right
		if (r < fruits.length) {
			d = fruits[r][0] - startPos;
			if (d <= k) {
				tmpF = fruits[r][1];
				tmpS = startPos;
				startPos = fruits[r][0];

				total += fruits[r][1];
				k -= d;
				fruits[r][1] = 0;

				harvest(l, r);

				startPos = tmpS;
				total -= tmpF;
				k += d;
				fruits[r][1] = tmpF;
			}
		}

		//left
		if (l > -1) {
			d = startPos - fruits[l][0];
			if (d <= k) {
				tmpF = fruits[l][1];
				tmpS = startPos;
				startPos = fruits[l][0];

				total += fruits[l][1];
				k -= d;
				fruits[l][1] = 0;

				harvest(l, r);

				startPos = tmpS;
				total -= tmpF;
				k += d;
				fruits[l][1] = tmpF;
			}
		}
	};

	harvest(left, right);

	return max;
};

console.log(maxTotalFruits([[0, 10000]], 200000, 0));
