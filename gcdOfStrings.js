var gcdOfStrings = function (str1, str2) {
  let divisor = str1.length > str2.length ? str2 : str1;
  while (divisor.length) {
    if (
      !str1.split(divisor).join("").length &&
      !str2.split(divisor).join("").length
    )
      return divisor;
    divisor = divisor.slice(0, -1);
  }
  return "";
};

console.log(gcdOfStrings("ababab", "ab"));
