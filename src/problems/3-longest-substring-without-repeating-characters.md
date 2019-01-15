# Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

## Example 1

```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

## Example 2

```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

## Example 3

```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solutions

Sliding Window:

```
given string s;
fromIndex = 0; endIndex = 0; longestLength = 0;
while (endIndex < length)
  find the repeatIndex of the character s[endIndex] in [fromIndex, endIndex - 1];
  if (no repeatIndex)
    endIndex++;
    longestLength = endIndex - fromIndex;
  else
    fromIndex = repeatIndex + 1;
return longestLength;
```
