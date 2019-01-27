/** DP
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   const length = s.length;
//   if (length === 0) {
//     return "";
//   }

//   if (length === 1) {
//     return s;
//   }

//   const twoLevelArray = length => {
//     const result = new Array(length);
//     for (let i = 0; i < length; i++) {
//       result[i] = new Array(length).fill(false);
//     }

//     return result;
//   };

//   const DP = twoLevelArray(length);

//   for (let i = 0; i < length; i++) {
//     DP[i][i] = true;
//   }

//   let longestIndex = [length - 1, length - 1];
//   for (let i = 0; i < length - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       DP[i][i + 1] = true;
//       longestIndex = [i, i + 1];
//     }
//   }

//   for (let gap = 2; gap < length; gap++) {
//     for (let i = 0; i < length - gap; i++) {
//       if (DP[i + 1][i + gap - 1] && s[i] === s[i + gap]) {
//         DP[i][i + gap] = true;
//         longestIndex = [i, i + gap];
//       }
//     }
//   }

//   return s.substring(longestIndex[0], longestIndex[1] + 1);
// };

/** DP with space Optimization
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   const length = s.length;
//   if (length === 0) {
//     return "";
//   }

//   if (length === 1) {
//     return s;
//   }

//   const DP = new Array(length).fill(false);
//   let longestIndex = [length - 1, length - 1];

//   for (let i = 0; i < length; i++) {
//     DP[i] = true;
//   }

//   for (let subLength = 3; subLength <= length; subLength = subLength + 2) {
//     for (let i = 0; i <= length - subLength; i++) {
//       if (DP[i + 1] && s[i] === s[i + subLength - 1]) {
//         DP[i] = true;
//         if (subLength >= longestIndex[1] - longestIndex[0] + 1) {
//           longestIndex = [i, i + subLength - 1];
//         }
//       } else {
//         DP[i] = false;
//       }
//     }
//   }

//   DP.fill(true);

//   for (let subLength = 2; subLength <= length; subLength = subLength + 2) {
//     for (let i = 0; i <= length - subLength; i++) {
//       if (DP[i + 1] && s[i] === s[i + subLength - 1]) {
//         DP[i] = true;
//         if (subLength >= longestIndex[1] - longestIndex[0] + 1) {
//           longestIndex = [i, i + subLength - 1];
//         }
//       } else {
//         DP[i] = false;
//       }
//     }
//   }

//   return s.substring(longestIndex[0], longestIndex[1] + 1);
// };

/** Expand Around Center
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

  let longestIndex = [0, 0];
  const longestAround = (s, leftIndex, rightIndex) => {
    const length = s.length;
    while (
      leftIndex >= 0 &&
      rightIndex < length &&
      s[leftIndex] === s[rightIndex]
    ) {
      leftIndex--;
      rightIndex++;
    }

    return rightIndex - leftIndex - 1;
  };

  for (let i = 0; i < length; i++) {
    const length1 = longestAround(s, i, i);
    const length2 = longestAround(s, i, i + 1);
    const maxLength = Math.max(length1, length2);
    if (maxLength > longestIndex[1] - longestIndex[0] + 1) {
      if (maxLength % 2 === 0) {
        const mid = maxLength / 2;
        longestIndex = [i - mid + 1, i + mid];
      } else {
        const mid = Math.floor(maxLength / 2);
        longestIndex = [i - mid, i + mid];
      }
    }
  }

  return s.substring(longestIndex[0], longestIndex[1] + 1);
};

export default longestPalindrome;
