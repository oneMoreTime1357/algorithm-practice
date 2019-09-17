/*
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目

汉明距离，是指：两个等长字符串之间的汉明距离是两个字符串对应位置的不同字符的个数。
意思就是，讲一个字符串变成另一个字符串所需要替换的字符个数。
例如：
1011101 与 1001001 之间的汉明距离是 2。
2143896 与 2233796 之间的汉明距离是 3。
"toned" 与 "roses" 之间的汉明距离是 3

----
给出两个整数 x和y，计算它们之间的汉明距离
*/

function hanmingDistance (x, y) {
  let erX = parseInt(x).toString(2)
  let erY = parseInt(y).toString(2)

  if (erX.length !== erY.length) {
    let len = erX.length - erY.length
    // 对于位数不足的补零
    if (len > 0) {
      erY = Array(len + 1).join('0') + erY
    } else {
      erX = Array(Math.abs(len) + 1).join('0') + erX
    }
  }

  let count = 0
  for (var i = 0; i < erX.length; i++) {
    if (erX[i] !== erY[i]) {
      count++
    }
  }

  return count
}


let count = hanmingDistance(12, 2)
console.log(count, 'end')

