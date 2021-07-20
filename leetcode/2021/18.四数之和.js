/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let len = nums.length
  if (!nums || len < 4) {
    return []
  }
  nums.sort((a, b) => a - b)
  let res = []

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
        continue
    }
    for (let j = i + 1; j < len - 2; j++) {
        // 相同的值跳过
      if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue
      }
      let L = j + 1
      let R = len - 1
      while (L < R) {
          if (nums[i] + nums[j] + nums[L] + nums[R] === target) {
              res.push([nums[i], nums[j], nums[L], nums[R]])
              while (L < R && nums[L] === nums[L + 1]) {
                  L = L + 1
              }
              while (L < R && nums[R] === nums[R - 1]) {
                  R = R - 1
              }
              L = L + 1
              R = R - 1
          } else if (nums[i] + nums[j] + nums[L] + nums[R] > target) {
              R = R - 1
          } else {
               L = L + 1
          }
      }
    }
  }
  return res
};
// @lc code=end

