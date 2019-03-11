/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (!height || height.constructor.name !== "Array") {
    throw "argument should be an array";
  }

  if (height.length < 2) {
    throw "array length should be at least 2";
  }

  let maxResult = 0;
  let leftIndex = 0,
    rightIndex = height.length - 1;

  while (leftIndex !== rightIndex) {
    let min = Math.min(height[leftIndex], height[rightIndex]);
    maxResult = Math.max(maxResult, (rightIndex - leftIndex) * min);
    if (height[leftIndex] > height[rightIndex]) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }

  return maxResult;
};

export { maxArea };
