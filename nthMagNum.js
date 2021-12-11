/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  let num1 = { val: (a * n) % 1000000007, mul: 0 },
    num2 = { val: (b * n) % 1000000007, mul: 1 },
    mul = { 0: a, 1: b };
  res = 0;

  res = num1.val > num2.val ? num2 : num1;
  const calc = m => {};
  while (n > 0) {
    if (Math.floor(res.val / mul[1 - res.mul]) < n) n--;
  }
};
