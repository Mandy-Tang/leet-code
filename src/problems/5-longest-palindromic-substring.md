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

**Space Optimization**
Split the length of substring with even and odd. If the given numbers length is 6,

```
for length 1: [f(0,0), f(1,1), f(2,2), f(3,3), f(4,4), f(5,5)]
for length 3: [f(0,2), f(1,3), f(2,4), f(3,5)] // these value can all come form the result for length 1
for length 5: [f(0,4), f(1,5)] // these value can all come form the result for length 3
```

```
for length 2: [f(0,1), f(1,2), f(2,3), f(3,4), f(4,5)]
for lenght 4: [f(0,3), f(1,4), f(2,5)] // these value can all come from the result for length 2
for length 6: [f(0,5)] // these value can all come from result for length 4
```

so we can just use one array with the length to be the length of the given array, the space optimization can reduce to O(n)
