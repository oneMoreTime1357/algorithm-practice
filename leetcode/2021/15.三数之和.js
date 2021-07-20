/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 请你找出所有和为 0 且不重复的三元组。
* 注意：答案中不可以包含重复的三元组。
* 如：
* 输入：nums = [-1,0,1,2,-1,-4]
* 输出：[[-1,-1,2],[-1,0,1]]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length
  let res = []
  if (!nums || len < 3) {
    return []
  }
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return res
    }

    // 如果后一个值与前一个值相等，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let L = i + 1
    let R = len - 1

    while (L < R) {
      if (nums[i] + nums[L] + nums[R] === 0) {
        res.push([nums[i], nums[L], nums[R]])
        // 如果后一个值与前一个值相等，则跳过
        while (L < R && nums[L] === nums[L + 1]) {
          L = L + 1
        }
        while (L < R && nums[R] === nums[R - 1]) {
          R = R - 1
        }
        L = L + 1
        R = R - 1
      } else if (nums[i] + nums[L] + nums[R] > 0) {
        R = R - 1
      } else {
        L = L + 1
      }
    }
  }
  return res
};
// @lc code=end

/*
* 本题的解法 排序，双指针
* 几个关键点、边界条件
1、如果数组长度小于3，则不满足条件，返回空数组
2、对数组进行排序，相加和为零，则必有正数和负数，排序之后负数在左，正数在右，双指针查找
3、使用循环，以当前节点为一个值 i，左指针是L=i+1，右指针为R = n-1
  当 i值大于0，则遍历到所有值都不可能相加为零，结束循环
  当i值 与左指针 i+1值与右指针 n-1相加为零，则为一组
  当相加小于0，则左指针 L加1，
  相加大于0，则右指针 R加1
  如果遇到后一个值与前一个值相同，则跳过，继续下一循环
*/