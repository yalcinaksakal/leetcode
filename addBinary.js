var addBinary = function (a, b) {
  let i = 1,
    sum,
    remainder = 0;
  const lenA = a.length,
    lenB = b.length;
  const result = [];

  while (lenA - i >= 0 || lenB - i >= 0) {
    sum = lenA - i < 0 ? 0 : +a[lenA - i];
    sum += lenB - i < 0 ? 0 : +b[lenB - i];
    sum += remainder;

    result.unshift(sum % 2);
    remainder = Math.floor(sum / 2);

    i++;
  }
  if (remainder) result.unshift(remainder);
  return result.join("");
};

addBinary("11", "1");
