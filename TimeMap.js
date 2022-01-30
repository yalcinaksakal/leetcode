var TimeMap = function () {
	this.data = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.find = function (vals, t, type = 0) {
	let low = 0,
		mid,
		high = vals.length - 1;
	while (low < high) {
		mid = (low + high) >>> 1;
		if (vals[mid].t < t) low = mid + 1;
		else high = mid;
	}
	if (low == vals.length - 1 && t > vals[low].t) low++;

	return type ? low : vals[low]?.t == t ? low : low - 1;
};
TimeMap.prototype.set = function (key, v, t) {
	if (!this.data[key]) this.data[key] = [{ t, v }];
	else {
		const i = this.find(this.data[key], t, 1);
		if (i < this.data.length && this.data[key][i].t == t)
			this.data[key][i].v = v;
		else this.data[key].splice(i, 0, { t, v });
	}
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, t) {
	if (!this.data[key]) return "";
	const i = this.find(this.data[key], t);
	if (i == -1) return "";
	return this.data[key][i].v;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

const a = new TimeMap();
a.set("foo", "bar", 1);
a.get("foo", 1);
a.get("foo", 3);
a.set("foo", "bar2", 4);
a.get("foo", 4);
a.get("foo", 5);
