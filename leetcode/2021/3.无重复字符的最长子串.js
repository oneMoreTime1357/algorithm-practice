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
  // 使用set来检测是否有重复的字符
  const occ = new Set();
  const len = s.length;
  // rk是右指针，初始值为-1，还没开始移动
  let rk = -1, ans = 0;
  for (let i = 0; i < len; i++) {
    // 每循环一次就会有一个重复的字符串，删掉最左边的字符
    if (i !== 0) {
      occ.delete(s.charAt(i - 1))
    }
    // 从当前字符开始向右累加，获取最长不重复的字符串
    while (rk + 1 < len && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 获取最长字符的长度
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
};
// @lc code=end

