# Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

## Example 1:

```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

## Example 2:

```
Input: "cbbd"
Output: "bb"
```

## Solution 1:

**Dynamic Programming**
We can use two level circulation to check whether s[i, j] is palindrome, where i and j are the start and end index of a substring in the given string. But if we know s[i, j], we can easily find out whether s[i-1, j+1] is palindrome or not.

set `f(i, j)` return a boolean value to represents whether substring s[i, j] is palindrome or not.
then, `f(i-1, j+1) = f(i, j) && s[i-1] === s[j-1]`.
so we can use dynamic programing to do this.

- time complexity is O(n^2)
- space complexity is O(n^3)
