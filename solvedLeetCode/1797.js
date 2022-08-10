/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
	this.timeToLive = timeToLive;
	this.tokens = {};
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
	this.tokens[tokenId] = currentTime + this.timeToLive;
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
	this.tokens[tokenId] > currentTime && this.generate(tokenId, currentTime);
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
	return Object.values(this.tokens).reduce(
		(acc, cur) => acc + (cur > currentTime ? 1 : 0),
		0
	);
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
const t = new AuthenticationManager(5);
t.renew("aaa", 1);
t.generate("aaa", 2);
t.countUnexpiredTokens(6);
t.generate("bbb", 7);
t.renew("aaa", 8);
t.renew("bbb", 10);
t.countUnexpiredTokens(15);
