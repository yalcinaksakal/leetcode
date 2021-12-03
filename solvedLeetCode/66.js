/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne1 = function (digits) {
  return (+digits.join("") + 1 + "").split("").map(c => +c);
};

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) break;
    digits[i] = 0;
  }
  if (!digits[0]) digits.unshift(1);
  return digits;
};
