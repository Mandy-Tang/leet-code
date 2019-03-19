import { isPalindrome } from "./234-palindrome-linked-list";
import { createList } from "../utils/list.util";

describe("check whether the given linked list is palindrome", () => {
  it("should return true if the given list is empty", () => {
    expect(isPalindrome(createList([]))).toBeTruthy();
  });

  it("should return true if the given list is palindrome and false when not", () => {
    expect(isPalindrome(createList([2, 3, 2]))).toBeTruthy();
    expect(isPalindrome(createList([4, 5, 2, 34]))).toBeFalsy();
  });
});
