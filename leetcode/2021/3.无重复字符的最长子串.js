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
 * 解决办法使用的是滑动窗口
 * 需要输出字符串的长度
 */
var lengthOfLongestSubstring = function(s) {
  const occ = new Set();
  const len = s.length;
  let rk = -1, ans = 0;
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < len && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    ans = Math.max(ans, rk - i + 1)
  }
};
// @lc code=end

