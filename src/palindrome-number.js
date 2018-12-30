/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (!Number.isInteger(x)) {
    return;
  }

  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let resource = x;
  let reversedValue = 0;

  while (reversedValue < resource) {
    reversedValue = reversedValue * 10 + (resource % 10);
    resource = Math.floor(resource / 10);
  }

  return (
    reversedValue === resource || Math.floor(reversedValue / 10) === resource
  );
};

export { isPalindrome };
