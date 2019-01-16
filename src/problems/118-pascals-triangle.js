/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  if (typeof numRows !== "number" || numRows < 0) {
    return;
  }

  if (Math.floor(numRows) === 0) {
    return [];
  }

  if (Math.floor(numRows) === 1) {
    return [[1]];
  }

  const pre = generate(numRows - 1);
  const preLength = pre.length;
  const preLastLine = pre[preLength - 1];
  const currentLine = [];
  currentLine[0] = 1;
  for (let i = 0; i < preLength - 1; i++) {
    currentLine[i + 1] = preLastLine[i] + preLastLine[i + 1];
  }
  currentLine[preLength] = 1;

  pre.push(currentLine);

  return pre;
};

export default generate;
