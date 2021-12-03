var customSortString = function (order, s) {
  const others = [];
  const orderedChars = [];
  let index;
  for (const char of s) {
    index = order.indexOf(char);
    if (index === -1) others.push(char);
    else orderedChars.push({ char, index });
  }
  console.log("order:", order, "s:", s);
  console.log("others:", others);
  console.log(orderedChars);
  console.log(
    orderedChars.sort((a, b) => a.index - b.index).map(el => el.char)
  );
  return [
    ...orderedChars.sort((a, b) => a - b).map(el => el.char),
    ...others,
  ].join("");
};

console.log(customSortString("cba", "abcd"));
