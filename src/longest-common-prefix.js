/**
 * vertical scanning
 * @param {string[]} strs
 * @return {string}
 */
const verticalScanningApproach = function(strs) {
  if (strs.constructor.name !== "Array") {
    return;
  }

  if (strs.length === 0) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let result = "";
  let temp = true;
  const maxLength = strs[0].length;
  const arrayLength = strs.length;

  for (let i = 0; i < maxLength; i++) {
    for (let j = 1; j < arrayLength; j++) {
      if (!strs[j][i]) {
        return result;
      }
      if (strs[j][i]) {
        temp = temp && strs[j][i] === strs[0][i];
        if (!temp) {
          return result;
        }
      }
    }
    result = `${result}${strs[0][i]}`;
  }

  return result;
};

/**
 * divide approach
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (!(strs instanceof Array)) {
    return;
  }

  return recursiveFunc(strs);
};

const recursiveFunc = strs => {
  if (strs.length === 0) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  const mid = Math.floor(strs.length / 2);
  const leftStrings = strs.slice(0, mid);
  const rightStrings = strs.slice(mid);
  return commonPrefix(recursiveFunc(leftStrings), recursiveFunc(rightStrings));
};

const commonPrefix = (str1, str2) => {
  const length = str1.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    if (str2[i] !== undefined && str2[i] === str1[i]) {
      result = str1.substring(0, i + 1);
    } else {
      return result;
    }
  }

  return result;
};

export { verticalScanningApproach, longestCommonPrefix };
