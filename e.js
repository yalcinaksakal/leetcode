var lengthOfLastWord = function (s) {
  const arr = s.split(" ");
  console.log(arr);
  let lastWord;
  console.log(lastWord);
  while (!lastWord) lastWord = arr.pop();
  console.log(lastWord);
  return lastWord.length;
};
console.log(lengthOfLastWord("Hello World"));
