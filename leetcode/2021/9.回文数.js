/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
* 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
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

