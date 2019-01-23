/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  for (let i = 0, j = numbers.length - 1; i < j; ) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
};

export default twoSum;
