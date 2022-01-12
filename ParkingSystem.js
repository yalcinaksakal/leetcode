/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
	this.lots = {
		1: { size: big, cur: 0 },
		2: { size: medium, cur: 0 },
		3: { size: small, cur: 0 },
	};
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
	if (this.lots[carType].cur < this.lots[carType].size) {
		this.lots[carType].cur++;
		return true;
	}
	return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
