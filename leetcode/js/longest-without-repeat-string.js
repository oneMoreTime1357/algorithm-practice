/**
* 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // let max = 0
    // let temp = ''
    // let cur = 0
    // for (var i = 0; i < s.length; i++) {
    // 	let c = s.charAt(i)
    // 	console.log(temp, cur, max, i)
    // 	if (temp.indexOf(c) > -1) {
    // 		temp = c
    // 		max = Math.max(max, cur)
    // 		cur = 0
    // 	} else {
    // 		temp += c
    // 		cur ++
    // 	}
    // 	cur = temp.length
    // 	console.log(max, cur)
    // }
    // max = Math.max(max, cur)

    // console.log(max, cur)

    // return max

    // 滑动窗口解法
    // let len = s.length
    // let ans = 0, i = 0, j = 0
    // let temp = ''
    // while ( i < len && j < len) {
    // 	if (temp.indexOf(s.charAt(j)) === -1) {
    // 		temp += s.charAt(j)
    // 		j++
    // 		cur = Math.max(cur, j - i)
    // 	} else {
    // 		temp = temp.slice(i)
    // 		i++
    // 	}
    // }

    // console.log(cur, temp)
    // return cur

    // ------------------
    let n = s.length, ans = 0;
    let map = {}
    for (let end = 0, start = 0; end < n; end ++) {
    	let cha = s.charAt(end)
    	if (map[cha]) {
    		start = Math.max(map[cha], start)
    	}

    	ans = Math.max(ans, end - start + 1)
    	map[cha] = end + 1
    }
    console.log(map)
    return ans
};
let test = "abcabcbb"
let test1 = 'bbbbb'
let test2 = "pwwkew"
let test3 = "dvdf"
let result = lengthOfLongestSubstring(test)
console.log(result, 'result')
