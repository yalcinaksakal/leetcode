var removeKdigits = function (num, k) {
  if (k === num.length) return 0;
  let min, temp;
  const removeChar = () => {
    min = null;
    for (let i = 0; i < num.length; i++) {
      temp = num.split("");
      temp.splice(i - 1, 1);
      temp = +temp.join("");
      if (temp < min || min === null) min = temp;
    }

    num = min + "";
  };

  for (let i = 0; i < k; i++) removeChar();
  return min;
};
console.log(removeKdigits("1432219", 3));
