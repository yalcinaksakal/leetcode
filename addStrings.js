var addStrings = function (num1, num2) {
  let i = 1,
    digitSum,
    remainder = 0;
  const result = [];
  const l1 = num1.length,
    l2 = num2.length;

  while (l1 - i >= 0 || l2 - i >= 0) {
    digitSum = l1 - i >= 0 ? +num1[l1 - i] : 0;

    digitSum += l2 - i >= 0 ? +num2[l2 - i] : 0;
    console.log(digitSum);
    digitSum += remainder;
    remainder = digitSum > 9 ? 1 : 0;
    digitSum %= 10;
    result.unshift(digitSum);
    i++;
  }
  if (remainder) result.unshift(1);
  return result.join("");
};

console.log(addStrings("11", "123"));
