/**
 * @param {number[]} w
 */
var Solution = function (w) {
	for (let i = 1; i < w.length; i++) w[i] += w[i - 1];
	this.w = w;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
	let l = this.w.length,
		idx = Math.floor(Math.random() * this.w[l - 1]) + 1,
		left = 0,
		right = l - 1,
		mid;
	while (left < right) {
		mid = (left + right) >>> 1;
		if (this.w[mid] == idx) return mid;
		else if (this.w[mid] < idx) left = mid + 1;
		else right = mid;
	}
	return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
