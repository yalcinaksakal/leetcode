var MedianFinder = function () {
	this.data = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
	let low = 0,
		high = this.data.length,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		if (this.data[mid] < num) low = mid + 1;
		else high = mid;
	}
	if (num > this.data[low]) this.data.push(num);
	else this.data.splice(low, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
	if (this.data.length % 2) return this.data[(this.data.length - 1) / 2];
	let a = this.data.length / 2;
	return (this.data[a] + this.data[a - 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
