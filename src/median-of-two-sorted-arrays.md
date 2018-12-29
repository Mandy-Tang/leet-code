# Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

## Example 1

```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

## Example 2

```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

## Solution

### Sort two arrays and then get the median number

```
newNums = [];
get mediumIndex and anotherMediumIndex;
for(let i = 0, j = 0; i < nums1.length || j < nums2.length; )
  if(nums1[i] < nums2[j])
    newNums.push(numn1[i++]);
  else
    newNums.push(nums2[j++])
  if(newNums.length === mediumIndex + 1)
    return anotherMediumIndex ? (newNums[mediumIndex] + Math.min(nums1[i], numns2[j])) / 2 : newNums[mediumIndex];
```
