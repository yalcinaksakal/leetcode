/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0,
    l = s.length - 1;
  while (i < s.length / 2) {
    [s[i], s[l - i]] = [s[l - i], s[i]];
    i++;
  }
};

let s = [
  "A",
  " ",
  "m",
  "a",
  "n",
  ",",
  " ",
  "a",
  " ",
  "p",
  "l",
  "a",
  "n",
  ",",
  " ",
  "a",
  " ",
  "c",
  "a",
  "n",
  "a",
  "l",
  ":",
  " ",
  "P",
  "a",
  "n",
  "a",
  "m",
  "a",
];
reverseString(s);
console.log(s.join(""));
