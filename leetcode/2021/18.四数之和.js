/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，
 * 判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？
 * 找出所有满足条件且不重复的四元组。
注意：答案中不可以包含重复的四元组。
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
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

/**
 * 根据三数之和的解法，得出四数之和
 */