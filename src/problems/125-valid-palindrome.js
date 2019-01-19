/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  if ((s !== "" && !s) || typeof s !== "string") {
    return;
  }

  if (s.length < 2) {
    return true;
  }

  const isAlphanumeric = charactor => {
    return (
      (charactor >= "0" && charactor <= "9") ||
      (charactor >= "a" && charactor <= "z") ||
      (charactor >= "A" && charactor <= "Z")
    );
  };

  const isUpperCase = charactor => charactor >= "A" && charactor <= "Z";

  for (let i = 0, j = s.length - 1; i < j; ) {
    while (i < j && !isAlphanumeric(s[i])) {
      i++;
    }
    while (i < j && !isAlphanumeric(s[j])) {
      j--;
    }

    const left = isUpperCase(s[i]) ? s[i].toLowerCase() : s[i];
    const right = isUpperCase(s[j]) ? s[j].toLowerCase() : s[j];

    if (left !== right) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

export default isPalindrome;
