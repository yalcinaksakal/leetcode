// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

const conversionTable = [
  { symbol: "M", value: 1000 },
  { symbol: "CM", value: 900 },
  { symbol: "D", value: 500 },
  { symbol: "CD", value: 400 },
  { symbol: "C", value: 100 },
  { symbol: "XC", value: 90 },
  { symbol: "L", value: 50 },
  { symbol: "XL", value: 40 },
  { symbol: "X", value: 10 },
  { symbol: "IX", value: 9 },
  { symbol: "V", value: 5 },
  { symbol: "IV", value: 4 },
  { symbol: "I", value: 1 },
];

const intToRoman = function (num) {
  roman = "";
  i = 0;
  while (i < conversionTable.length) {
    if (num >= conversionTable[i].value) {
      roman += conversionTable[i].symbol;
      num -= conversionTable[i].value;
    } else i++;
  }
  return roman;
};
const romanToInt = function (s) {
  result = 0;
  i = 0;
  j = 0;
  length = 0;
  while (i < s.length && j < conversionTable.length) {
    length = conversionTable[j].symbol.length;
    if (s.slice(i, i + length) === conversionTable[j].symbol) {
      result += conversionTable[j].value;
      i += length;
    } else j++;
  }
  return result;
};
