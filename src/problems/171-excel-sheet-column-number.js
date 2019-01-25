/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const base = 26;
  const Acode = 65;
  const length = s.length;
  let result = 0;
  for (let i = 0; i < length; i++) {
    // result += (s.charCodeAt(i) - Acode + 1) * Math.pow(base, length - i - 1);
    result = result * base + (s.charCodeAt(i) - Acode + 1);
  }
  return result;
};

export default titleToNumber;
