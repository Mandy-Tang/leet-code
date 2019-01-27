/** DP
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const length = s.length;
  if (length === 0) {
    return "";
  }

  if (length === 1) {
    return s;
  }

  const twoLevelArray = length => {
    const result = new Array(length);
    for (let i = 0; i < length; i++) {
      result[i] = new Array(length).fill(false);
    }

    return result;
  };

  const DP = twoLevelArray(length);

  for (let i = 0; i < length; i++) {
    DP[i][i] = true;
  }

  let longestIndex = [length - 1, length - 1];
  for (let i = 0; i < length - 1; i++) {
    if (s[i] === s[i + 1]) {
      DP[i][i + 1] = true;
      longestIndex = [i, i + 1];
    }
  }

  for (let gap = 2; gap < length; gap++) {
    for (let i = 0; i < length - gap; i++) {
      if (DP[i + 1][i + gap - 1] && s[i] === s[i + gap]) {
        DP[i][i + gap] = true;
        longestIndex = [i, i + gap];
      }
    }
  }

  return s.substring(longestIndex[0], longestIndex[1] + 1);
};

export default longestPalindrome;
