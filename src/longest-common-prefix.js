/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
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

export { longestCommonPrefix };
