/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const num2 = (k + "").split("");
  let i = 0,
    remainder = 0,
    n;
  const l1 = num.length,
    l2 = num2.length,
    result = [];

  while (l1 > i || l2 > i) {
    n = l1 > i ? +num[l1 - i - 1] : 0;
    n += l2 > i ? +num2[l2 - i - 1] : 0;
    n += remainder;
    remainder = n > 9 ? 1 : 0;
    n %= 10;
    result.unshift(n);
    i++;
  }
  if (remainder) result.unshift(1);
  return result;
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
