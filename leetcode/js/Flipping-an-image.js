
 /** 
 翻转图像

二进制矩阵A，先水平翻转图像，然后反转图像并返回结果
水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。

反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]
例如：
    输入: [[1,1,0],[1,0,1],[0,0,0]]
    输出: [[1,0,0],[0,1,0],[1,1,1]]
    解释: 首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
    然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]

*/

//下面是我的解答
function reversView (data) {
  let reversData = []
  for (let index = 0; index < data.length; index++) {
    const element = data[index].reverse();
    let flagData = []
    for (let j = 0; j < element.length; j++) {
      const item = element[j];
      let parseItem = item === 1 ? 0 : 1
      flagData.push(parseItem)
    }
    reversData.push(flagData)
  }
  console.log(reversData)
  return reversData
}

// 输入测试用例测试
const putData = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
reversView(putData)

/** 
这个题目不难，对于二阶矩阵最简单的方法就是使用两个for循环解决问题。
第一个for循环将每个item进行翻转，第二个for再将其取反就可以了。

链接： https://leetcode-cn.com/problems/flipping-an-image/description/
*/