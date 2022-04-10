/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (num) {
	let n = (num + "").split("").map(i => +i);
	const length = n.length;
	if (length < 2) return -1;
	let lastPeek = -1;
	for (i = length - 1; i > 0; i--)
		if (n[i] > n[i - 1]) {
			lastPeek = i;
			break;
		}
	if (lastPeek === -1) return -1;
	//check if lower peek exist on right side
	let lowerPeek = lastPeek;
	for (i = length - 1; i > lastPeek; i--)
		if (n[i] > n[lastPeek - 1] && n[i] <= n[lowerPeek]) {
			lowerPeek = i;
			break;
		}
	//swap elements in lastPeek-1 with lowerPeek
	const temp = n[lastPeek - 1];
	n[lastPeek - 1] = n[lowerPeek];
	n[lowerPeek] = temp;
	//sort elements between [lastPeek,lentgh]
	n.slice(lastPeek)
		.sort((a, b) => a - b)
		.forEach((element, index) => {
			n[lastPeek + index] = element;
		});
	n = +n.join("");
	return n > 2147483647 ? -1 : n;
};
