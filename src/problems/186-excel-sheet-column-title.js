/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let remain = n;
  const base = 26;
  const Acode = 65;
  let result = "";
  while (remain !== 0) {
    let current;
    current = (remain - 1) % base;
    remain = Math.floor((remain - 1) / base);
    result = `${String.fromCharCode(Acode + current)}${result}`;
  }

  return result;
};

export default convertToTitle;
