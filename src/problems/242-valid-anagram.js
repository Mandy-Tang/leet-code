/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const tempMap = new Map();
  const length = s.length;
  for (let i = 0; i < length; i++) {
    const sNumber = tempMap.has(s[i]) ? tempMap.get(s[i]) : 0;
    tempMap.set(s[i], sNumber + 1);

    const tNumber = tempMap.has(t[i]) ? tempMap.get(t[i]) : 0;
    tempMap.set(t[i], tNumber - 1);
  }

  for (let [key, value] of tempMap) {
    if (value) {
      return false;
    }
  }

  return true;
};

export { isAnagram };
