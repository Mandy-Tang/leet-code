/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  const length = piles.length;
  if (length > H) {
    return;
  }

  let max = piles.reduce(
    (acc, cur) => Math.max(acc, cur),
    Number.MIN_SAFE_INTEGER
  );

  if (length === H) {
    return max;
  }

  let min = 0,
    mid;
  while (min < max) {
    mid = Math.floor((max + min) / 2);
    if (check(piles, mid, H)) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }
  return min;
};

function check(piles, speed, h) {
  const time = piles.reduce((acc, cur) => acc + Math.ceil(cur / speed), 0);
  return time <= h;
}

export { minEatingSpeed };
