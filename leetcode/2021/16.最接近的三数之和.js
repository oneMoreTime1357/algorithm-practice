/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let len = nums.length
  let sum = 0, ans = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < len; i++) {
    let L = i + 1
    let R = len - 1

    while (L < R) {
      sum = nums[i] + nums[L] + nums[R]
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum
      }
      if (target > sum) {
        L++
      } else if (target < sum) {
        R--
      } else {
        return sum
      }
    }
  }
  return ans
};
// @lc code=end

