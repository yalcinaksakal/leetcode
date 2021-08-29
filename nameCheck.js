// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
// Example 3:

// Input: name = "leelee", typed = "lleeelee"
// Output: true
// Example 4:

// Input: name = "laiden", typed = "laiden"
// Output: true
// Explanation: It's not necessary to long press any character.

const isLongPressedName = function (name, typed) {
  const reducer = s => {
    i = 0;
    repeat = 0;
    result = [];
    while (s[i]) {
      if (s[i] === s[i + 1]) repeat++;
      else {
        result.push([s[i], repeat]);
        repeat = 0;
      }
      i++;
    }
    return result;
  };
  reducedName = reducer(name);
  reducedTyped = reducer(typed);
  if (reducedName.length !== reducedTyped.length) return false;
  for (i = 0; i < reducedName.length; i++)
    if (
      reducedName[i][1] > reducedTyped[i][1] ||
      reducedName[i][0] !== reducedTyped[i][0]
    )
      return false;
  return true;
};
console.log(isLongPressedName("saeed", "ssaaedd"));
