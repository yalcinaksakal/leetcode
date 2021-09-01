// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each email[i], return the number of different addresses that actually receive mails.

// Example 1:

// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
// Example 2:

// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3
var numUniqueEmails = function (emails) {
  validChars = {
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1,
    g: 1,
    h: 1,
    i: 1,
    j: 1,
    k: 1,
    l: 1,
    m: 1,
    n: 1,
    o: 1,
    p: 1,
    q: 1,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 1,
    w: 1,
    x: 1,
    y: 1,
    z: 1,
    ".": 1,
  };
  const checkValidity = str => {
    if (str.length !== 2 || str[1].includes("+")) return false;
    str[0] = str[0].split("+")[0];
    str[0] = str[0].split(".").join("");
    for (const s of str)
      for (i = 0; i < s.length; i++) if (!validChars[s[i]]) return false;
    return [str[0], str[1]].join("@");
  };
  result = new Set();

  for (const email of emails) {
    validEmail = checkValidity(email.split("@"));
    if (validEmail) result.add(validEmail);
  }
  return result.size;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
