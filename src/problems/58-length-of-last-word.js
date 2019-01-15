/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  if ((!s && s !== "") || typeof s !== "string") {
    return undefined;
  }

  s = s.trim();
  const length = s.length;

  for (let i = length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      return length - i - 1;
    }
  }
  return length;
};

export { lengthOfLastWord };
