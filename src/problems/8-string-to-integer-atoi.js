/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let result = 0;
  if (!str || !str.trim()) {
    return result;
  }

  str = str.trim();
  const length = str.length;
  let negative = false;
  let i = 0;
  if (str[i].match("\\+") || str[i].match("\\-")) {
    negative = str[i] === "-";
    i++;
  }
  for (; i < length && str[i].match(/[0-9]/); i++) {
    result = result * 10 + Number(str[i]);
    if (!negative && result > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    }
    if (negative && result > Math.pow(2, 31)) {
      return 0 - Math.pow(2, 31);
    }
  }
  return negative ? 0 - result : result;
};

export default myAtoi;
