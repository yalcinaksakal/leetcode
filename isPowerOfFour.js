/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = n => n && !(n & (n - 1)) && !(n & 0xaaaaaaaa);
