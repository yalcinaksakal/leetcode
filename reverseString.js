/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0;
  const length = s.length;
  while (i < length) {
    s.splice(length - i - 1, 0, s.shift());
    i++;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
