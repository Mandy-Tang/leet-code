# Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

## Example 1:

Input: [2,2,1]
Output: 1

## Example 2:

Input: [4,1,2,1,2]
Output: 4

## Approach 1:

Traverse the array, use a set to save the visited item.

- If `nums[i]` is not in the set, put it in to the set;
- If `nums[i]` is in the set, remove it from the set;
- At the end, the only element remains in the set is what we want. Otherwise, return 0.

## Approach 2：

XOR calculate: `a ^ b ^ a = b`
This is brilliant!!!!
