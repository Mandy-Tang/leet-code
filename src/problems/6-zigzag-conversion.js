/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const length = s.length;
  const cycleLength = 2 * numRows - 2;

  let result = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; i + j < length; j = j + cycleLength) {
      result = result + s[j + i];
      if (i !== 0 && i !== numRows - 1 && j + cycleLength - i < length) {
        result = result + s[j + cycleLength - i];
      }
    }
  }
  return result;
};

export default convert;
