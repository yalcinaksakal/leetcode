var Skiplist = function () {
	this.list = [];
};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target, type = 0) {
	let low = 0,
		high = this.list.length - 1,
		mid;
	while (low < high) {
		mid = (low + high) >>> 1;
		if (this.list[mid] < target) low = mid + 1;
		else high = mid;
	}
	if (!type) return this.list[low] == target;
	if (type == 2) {
		if (this.list[low] != target) return false;
		this.list.splice(low, 1);
		return true;
	}
	if (target > this.list[low]) this.list.push(target);
	else this.list.splice(low, 0, target);
};

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
	this.search(num, 1);
};

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
	return this.search(num, 2);
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
