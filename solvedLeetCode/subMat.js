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
romanToInt("");
