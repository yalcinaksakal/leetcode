var UndergroundSystem = function () {
	this.data = {};
	this.passenger = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
	this.passenger[id] = { stationName, t };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
	const key = this.passenger[id].stationName + "-" + stationName;
	this.data[key]
		? this.data[key].push(t - this.passenger[id].t)
		: (this.data[key] = [t - this.passenger[id].t]);
	delete this.passenger[id];
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
	startStation,
	endStation
) {
	const key = startStation + "-" + endStation;
	return (
		this.data[key].reduce((acc, cur) => acc + cur, 0) / this.data[key].length
	);
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
