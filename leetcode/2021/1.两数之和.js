/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 暴力解决法 
 * 双循环遍历求解
 */
// var twoSum = function(nums, target) {
//   // 暴力解决法 
//   // 遍历求解
//   let len = nums.length
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if ((nums[i] + nums[j]) === target) {
//         return [i, j]
//       }
//     }
//   }
// };

/**
 * 用hash的方式来求解，存储计算过的值
 * object和map，map更优一些，针对大数据性能表现更好
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var twoSum = function(nums, target) {
  let map = new Map()
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}


let r = twoSum([2,7,11,15], 9)
console.log(r)
// @lc code=end

