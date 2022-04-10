var RandomizedSet = function () {
	this.map = {};
	this.data = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.map[val]) return false;
	this.map[val] = this.data.length + 1;
	this.data.push(val);
	return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
	if (!this.map[val]) return false;
	this.data[this.map[val] - 1] = this.data[this.data.length - 1];
	this.map[this.data[this.data.length - 1]] = this.map[val];
	this.map[val] = false;
	this.data.pop();
	return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	return this.data[Math.floor(Math.random() * this.data.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
const rSet = new RandomizedSet();
console.log(rSet.insert(0));
console.log(rSet.insert(1));
console.log(rSet.remove(0));
console.log(rSet.insert(2));
console.log(rSet.remove(1));
console.log(rSet.insert(1));
console.log(rSet.getRandom());
