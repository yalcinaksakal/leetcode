const lengthOfLongestSubstring = s => {
  let res = 0;
  let set = new Set();
  let i = 0;
  let j = 0;
  while (i < s.length && j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      j++;
      if (j - i > res) res = j - i;
    } else {
      set.delete(s[i]);
      i++;
    }
  }
  return res;
};


console.log(
  lengthOfLongestSubstring(
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'
  )
);

/*
Given a string s, find the length of the longest substring without repeating characters.
  */
