var MapSum = function () {
	this.map = {};
	this.sums = {};
	this.addRemove = (key, val) => {
		let prefix = "";
		for (const c of key) {
			prefix += c;
			this.sums[prefix] = this.sums[prefix] ? this.sums[prefix] + val : val;
		}
	};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
	this.map[key] && this.addRemove(key, -this.map[key]);
	this.map[key] = val;
	this.addRemove(key, val);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
	return this.sums[prefix] ? this.sums[prefix] : 0;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
