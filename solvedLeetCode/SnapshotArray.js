/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
	this.data = {};
	for (let i = 0; i < length; i++) this.data[i] = {};
	this.snap_id = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
	this.data[index][this.snap_id] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
	return this.snap_id++;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
	if (snap_id < this.snap_id)
		while (snap_id && this.data[index][snap_id] == undefined) snap_id--;

	const res = this.data[index][snap_id];
	return res ? res : 0;
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
