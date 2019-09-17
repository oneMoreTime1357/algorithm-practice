/*
给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

注意:

给定的整数保证在32位带符号整数的范围内。
你可以假定二进制数不包含前导零位。
示例 1:

输入: 5
输出: 2
解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
示例 2:

输入: 1
输出: 0
解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0。
*/

// 思路: 首先将十进制数字转换成二进制，然后再进行替换取反，最后输出

var findComplement = function (num) {
  var to2 = parseInt(num).toString(2).split('')
  var reverseArry = []
  for (var i = 0; i < to2.length; i++) {
    if (+to2[i] === 1) {
      reverseArry.push(0)
    } else {
      reverseArry.push(1)
    }
  }
  return parseInt(+reverseArry.join(''), 2)
}

var comp = findComplement(20161211)

console.log(comp, parseInt(20161211).toString(2))