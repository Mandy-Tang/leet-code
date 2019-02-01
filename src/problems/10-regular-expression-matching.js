/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length === 0) {
    return s.length === 0;
  }

  const firstMath = s.length !== 0 && (p[0] === "." || p[0] === s[0]);

  if (p.length > 1 && p[1] === "*") {
    return (
      (firstMath && isMatch(s.substring(1), p)) || isMatch(s, p.substring(2))
    );
  }

  return firstMath && isMatch(s.substring(1), p.substring(1));
};

export default isMatch;
