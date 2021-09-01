// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
const map = { "(": ")", "[": "]", "{": "}" };

const isValid = s => {
  stack = [];
  for (i = 0; i < s.length; i++) {
    if (!stack.length && !map[s[i]]) return false;
    if (map[s[i]]) {
      stack.push(s[i]);
      continue;
    }
    if (map[stack[stack.length - 1]] === s[i]) {
      stack.pop();
      continue;
    }
    return false;
  }
  return !stack.length;
};

result = isValid("{()[]{}}");

console.log(result);
