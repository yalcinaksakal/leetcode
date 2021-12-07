var isOneBitCharacter = function (bits) {
  if (bits.pop()) return false;
  bits = bits.join("");

  if (
    !bits
      .replace(/10/g, "-")
      .replace(/11/g, "-")
      .split("")
      .reduce((acc, cur) => {
        if (cur === "-") return acc;
        cur = +cur;
        return acc + cur;
      }, 0)
  )
    return true;
  if (
    !bits
      .replace(/11/g, "-")
      .replace(/10/g, "-")
      .split("")
      .reduce((acc, cur) => {
        if (cur === "-") return acc;
        cur = +cur;
        return acc + cur;
      }, 0)
  )
    return true;
  return false;
};
console.log(isOneBitCharacter([1, 1, 0, 1, 0]));
