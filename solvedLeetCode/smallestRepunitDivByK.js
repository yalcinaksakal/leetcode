/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
	let cur = 1,
		n = 1;

	const visited = {};

	if (!(k % 2)) return -1;

	while (cur % k && !visited[cur]) {
		visited[cur] = 1;
		n++;
		cur = (cur * 10 + 1) % k;
	}

	if (cur % k) n = -1;
	return n;
};
