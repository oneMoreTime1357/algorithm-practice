/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: s = "abcabcbb"
* 输出: 3 
* 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0
  let sAarry = s.split('')
  let res = []
  for (let index = 0, len = sAarry.length; index < len - 1; index++) {
    // const element = array[index];
   for (let j = index + 1; j < len; j++) {
  // const element = array[index];
      
    }
  }
};
// @lc code=end

