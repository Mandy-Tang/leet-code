/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (
    flowerbed.constructor.name !== "Array" ||
    flowerbed.length === 0 ||
    n < 0
  ) {
    return;
  }

  if (n === 0) {
    return true;
  }

  const length = flowerbed.length;

  for (let i = 0; i < length && n > 0; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  if (n === 0) {
    return true;
  }
  return false;
};

export { canPlaceFlowers };
