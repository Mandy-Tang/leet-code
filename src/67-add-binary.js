/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  const ALength = a.length;
  const BLength = b.length;
  let result = "";
  let carry = 0;
  for (let i = 0; ALength - 1 - i >= 0 || BLength - 1 - i >= 0; i++) {
    let currentA = ALength - 1 - i >= 0 ? a[ALength - 1 - i] : 0;
    let currentB = BLength - 1 - i >= 0 ? b[BLength - 1 - i] : 0;
    let tempSum = Number(currentA) + Number(currentB) + carry;
    carry = tempSum > 1 ? 1 : 0;
    let curValue = carry ? tempSum - 2 : tempSum;
    result = `${curValue}${result}`;
  }

  return carry ? `1${result}` : result;
};

export { addBinary };
