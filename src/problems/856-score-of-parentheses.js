/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  const length = s.length;
  if (length === 0) {
    return 0;
  }

  const temp = [];
  for (let i = 0; i < length; i++) {
    if (s[i] === "(") {
      temp.push("(");
    } else {
      if (temp.length === 1) {
        temp[0] = 1;
      } else {
        let pre = temp.pop();
        let prePre = temp.pop();
        if (pre === "(" && prePre === "(") {
          temp.push("(");
          temp.push(1);
        } else if (pre === "(" && prePre !== "(") {
          temp.push(prePre + 1);
        } else if (pre !== "(" && prePre === "(") {
          temp.push(pre * 2);
        } else if (pre !== "(" && prePre !== "(") {
          temp.push(pre + prePre);
        }

        while (
          temp.length >= 2 &&
          temp[temp.length - 1] !== "(" &&
          temp[temp.length - 2] !== "("
        ) {
          let cur = temp.pop();
          temp[temp.length - 1] = temp[temp.length - 1] + cur;
        }
      }
    }
  }

  return temp[0];
};

export { scoreOfParentheses };
