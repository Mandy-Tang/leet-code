import { canPlaceFlowers } from "./605-can-place-flowers";

describe("canPlaceFlowers", () => {
  it("should return undefined if the given parameters is not legal", () => {
    expect(canPlaceFlowers("", 3)).toBeUndefined();
    expect(canPlaceFlowers([], 3)).toBeUndefined();
    expect(canPlaceFlowers([1, 0, 1], -1)).toBeUndefined();
  });

  it("should return ture if the given n is zero", () => {
    expect(canPlaceFlowers([1, 0], 0)).toBeTruthy();
  });

  it("should return true if the given n can be palced in the flowerbed, otherwise return false", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy();
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy();
    expect(canPlaceFlowers([0, 0, 1, 0, 0, 0, 1, 0, 0], 3)).toBeTruthy();
  });
});
