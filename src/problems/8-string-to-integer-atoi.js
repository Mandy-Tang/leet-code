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
  let negative;
  let i = 0;
  if (str[i].match("\\+") || str[i].match("\\-")) {
    negative = str[i] === "-";
    i++;
  }
  for (; i < length && str[i].match(/[0-9]/) && result < Math.pow(2, 31); i++) {
    result = result * 10 + Number(str[i]);
  }

  if (result < Math.pow(2, 31)) {
    return negative ? 0 - result : result;
  }

  return negative ? 0 - Math.pow(2, 31) : Math.pow(2, 31) - 1;
};

export default myAtoi;
