var RandomizedSet = function () {
	this.data = {};
	this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.data[val] != undefined) return false;
	this.data[val] = this.list.length;
	this.list.push(val);
	return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (this.data[val] == undefined) return false;
	const i = this.data[val],
		last = this.list.pop();
	if (last != val) {
		this.list[i] = last;
		this.data[last] = i;
	}
	delete this.data[val];
	return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	return this.list[Math.floor(Math.random() * this.list.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
const a = new RandomizedSet();
a.insert(0);
a.remove(0);
a.insert(-1);
a.remove(0);
a.getRandom();
a.getRandom();
a.getRandom();
a.getRandom();
a.getRandom();
a.getRandom();
a.getRandom();
