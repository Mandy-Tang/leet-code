/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (typeof haystack !== "string" || typeof needle !== "string") {
    return undefined;
  }

  if (needle === "") {
    return 0;
  }

  const haystackLength = haystack.length;
  const needleLength = needle.length;

  for (let i = 0; i < haystackLength; i++) {
    if (haystack.slice(i, i + needleLength) === needle) {
      return i;
    }
    // let j = 0;
    // while (j < needleLength && i + j < haystackLength && haystack[i+j] === needle[j]) {
    //   j++;
    // }
    // if (j === needleLength) {
    //   return i;
    // }
  }

  return -1;
};

export { strStr };
