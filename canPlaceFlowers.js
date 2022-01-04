/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	let beds = 0,
		i = 0;

	while (i < flowerbed.length)
		if (flowerbed[i]) i += 2;
		else if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
			flowerbed[i] = 1;
			beds++;
			i += 2;
		} else i++;

	return n <= beds;
};
