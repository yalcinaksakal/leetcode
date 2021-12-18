/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let mod = 26,
    title = [],
    remainder;
  const letters = [
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  while (columnNumber > 0) {
    remainder = columnNumber % mod;
    title.unshift(letters[remainder]);
    columnNumber -= remainder ? remainder : mod;
    columnNumber /= mod;
  }
  return title.join("");
};

console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(2147483647));
