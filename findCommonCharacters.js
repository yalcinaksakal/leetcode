var commonChars = function (words) {
  const map = {};
  words = words.map(w => w.split(""));
  let word;
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    word.forEach(c => {
      if (!map[c]) {
        map[c] = { count: {}, inWords: new Set([i]) };
        map[c].count[i] = 1;
      } else {
        map[c].count[i] ? map[c].count[i]++ : (map[c].count[i] = 1);
        map[c].inWords.add(i);
      }
    });
  }
  const result = [];
  let count;
  for (const [c, v] of Object.entries(map)) {
    if (v.inWords.size === words.length) {
      count = Math.min(...Object.values(v.count));
      for (let i = 0; i < count; i++) result.push(c);
    }
  }
  return result;
};
console.log(commonChars(["bella", "label", "roller"]));
