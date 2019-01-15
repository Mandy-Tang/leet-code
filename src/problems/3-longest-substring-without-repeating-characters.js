/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (typeof s !== "string") {
    return;
  }

  let longestLength = 0;
  const length = s.length;
  const readedMap = new Map();
  for (let fromIndex = 0, toIndex = 0; toIndex < length; toIndex++) {
    const preIndex = readedMap.get(s[toIndex]);
    if (preIndex === 0 || preIndex) {
      fromIndex = preIndex < fromIndex ? fromIndex : preIndex + 1;
    }
    longestLength = Math.max(longestLength, toIndex - fromIndex + 1);
    readedMap.set(s[toIndex], toIndex);
  }

  return longestLength;
};

export default lengthOfLongestSubstring;
