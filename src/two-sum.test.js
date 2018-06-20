/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

import twoSum from './two-sum'

describe('tow sum', () => {
  it('should return an array with two elements if it finds that the sum of these two elements equal the given target', () => {
    const givenSum = [2, 7, 11, 15]
    const givenTarget = 9
    expect(twoSum(givenSum, givenTarget)).toEqual([0, 1])
  })
  it('should return nothing when it do not find the two numbers', () => {
    const givenSum = [2, 7, 11, 15]
    const givenTarget = 10
    expect(twoSum(givenSum, givenTarget)).toEqual(undefined)
  })
  it('should return nothing when the given sum or target is not illegal', () => {
    const givenSum = 2
    const givenTarget = []
    expect(twoSum(givenSum, givenTarget)).toEqual(undefined)
  })
})
