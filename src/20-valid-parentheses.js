/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (typeof s !== "string") {
    return;
  }

  const stack = [];
  const length = s.length;
  const openSet = new Set(["[", "{", "("]);
  const closeSet = new Set(["]", "}", ")"]);
  const bracketMap = new Map([["(", ")"], ["[", "]"], ["{", "}"]]);

  for (let i = 0; i < length; i++) {
    const cur = s[i];

    if (closeSet.has(cur)) {
      const lastStored = stack[stack.length - 1];
      const isPair = bracketMap.get(lastStored) === cur;

      if (!isPair) {
        return false;
      }

      stack.pop();
    } else if (openSet.has(cur)) {
      stack.push(cur);
    } else {
      return undefined;
    }
  }

  return stack.length === 0;
};

export { isValid };
