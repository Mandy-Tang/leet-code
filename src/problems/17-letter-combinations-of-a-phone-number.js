/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (typeof digits !== "string") {
    return;
  }

  if (!/^[1-9]*$/.test(digits)) {
    return;
  }

  if (digits == "") {
    return [];
  }

  let result = [];
  Array.from(digits).forEach(digit => {
    result = combinationsByOneLetter(result, digit);
  });

  return result;
};

const LETTER_MAP = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};

function combinationsByOneLetter(preResult, digit, letterMap = LETTER_MAP) {
  if (preResult.length === 0) {
    return [...letterMap[digit]];
  }
  const result = [];
  letterMap[digit].forEach(digitLetter => {
    preResult.forEach(combination => {
      result.push(combination + digitLetter);
    });
  });
  return result;
}

export { letterCombinations };
