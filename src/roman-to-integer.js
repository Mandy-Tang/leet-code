/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  if (typeof s !== "string") {
    return;
  }

  const length = s.length;
  let result = 0;
  for (let i = 0; i < length; ) {
    let currentString = s[i];
    switch (currentString) {
      case "I":
        switch (s[i + 1]) {
          case "V":
            result += 4;
            i = i + 2;
            break;
          case "X":
            result += 9;
            i = i + 2;
            break;
          default:
            result += 1;
            i++;
        }
        break;
      case "V":
        result += 5;
        i++;
        break;
      case "X":
        switch (s[i + 1]) {
          case "L":
            result += 40;
            i = i + 2;
            break;
          case "C":
            result += 90;
            i = i + 2;
            break;
          default:
            result += 10;
            i++;
            break;
        }
        break;
      case "L":
        result += 50;
        i++;
        break;
      case "C":
        switch (s[i + 1]) {
          case "D":
            result += 400;
            i = i + 2;
            break;
          case "M":
            result += 900;
            i = i + 2;
            break;
          default:
            result += 100;
            i++;
            break;
        }
        break;
      case "D":
        result += 500;
        i++;
        break;
      case "M":
        result += 1000;
        i++;
        break;
      default:
        return;
    }
  }

  return result;
};

export { romanToInt };
