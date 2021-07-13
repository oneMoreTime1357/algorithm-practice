/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 * 解决思路：使用js原有的方法翻转、连接
 */
var isPalindrome = function(x) {
  return x.toString() === x.toString().split('').reverse().join('')
};
// @lc code=end

