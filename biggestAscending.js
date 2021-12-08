const biggestAscending = function (num) {
  if (typeof num === "number") num += "";

  const l = num.length;
  const digits = num.split("");
  let i = l - 1;

  while (i > 0) {
    if (digits[i] < digits[i - 1]) {
      for (let k = i; k < l; k++) digits[k] = 9;
      digits[i - 1]--;
    }
    i--;
  }
  while (!digits[0] && digits.length) digits.shift();
  return digits.join("");
};
console.log(JSON.stringify(biggestAscending + ""));
console.log(biggestAscending(112000800));
