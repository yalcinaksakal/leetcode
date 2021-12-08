// Thomas likes numbers. As a meditation exercise, he likes to go through all numbers starting
// with 1 and going up, and then marking all numbers whose digits are sorted in ascending
// order. For example, 11235888 is such a number. After a while, he stops.
// Write an efficiently designed program which, after entering a number between 1 and 10^18,
// which represents the last number checked by Thomas, then outputs the last number marked
// by Thomas.
// Examples:
// Input: 23245 Output: 22999
// Input: 11235888 Output: 11235888
// Input: 111110 Output: 99999
// Input: 33245 Output: 29999
// Tip: Going through the numbers one by one and testing them is not efficient enough.

const biggestAscending = function (num) {
  if (typeof num === "number") num += "";
  const l = num.length;
  const digits = num.split("");
  let i = l - 1;
  while (i > 0) {
    if (digits[i] < digits[i - 1]) {
      for (let k = i; k < l; k++) digits[k] = 9;
      digits[i - 1]--;
      //   i = l;
      continue;
    }
    i--;
  }
  while (!digits[0] && digits.length) digits.shift();
  return digits.join("");
};
console.log(JSON.stringify(biggestAscending + ""));
console.log(biggestAscending("111110"));
