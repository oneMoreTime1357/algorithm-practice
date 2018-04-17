  # 宝石与石头 and Moving Zeros To The End

## 宝石与石头(leetcode)
给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
**示例1**
```
输入： J = "aA", S = "aAAABb"
输出： 3
```
**注意**
- `S`和`J`最多含有50个字母。
- `J`中的字符不重复

**我的解答（JavaScript）**
```
var numJewelsInStones = function(J, S) {
    let jArry = J.split('')
    let sArry = S.split('')
    let sum = 0
    for (let i = 0; i < jArry.length; i++) {
        for (let j = 0; j < sArry.length; j++) {
            if (jArry[i] === sArry[j]) {
                sum++
            }
        }
    }
    return sum
};
```
使用两个for循环做对比，这算是最好想的一种解答方法了吧。

---

## Moving Zeros To The End(codewars)
Write algorithm that takes an array and moves all of the zeros to the end,preserving the order of the other elements.

写一个算法将数组中所有的0移动到最后，并保证其他元素顺序不变

**示例**
```
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```

**我的解答**
拆成两个数组，一个数组存数字一个数组存0，最后再将这两个数组进行合并，这种方法很好想，但不是最精简最聪明的办法。
```
var moveZeros = function (arr) {
  // TODO: Program me
  let numArry = []
  let zeroArry = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      numArry.push(arr[i])
    } else {
      zeroArry.push(0)
    }
  }
  return numArry.concat(zeroArry)
}
```

**最聪明的解法**
- 解法1
```
var moveZeros = function (arr) {
    return arr.filter(function(x) { return x !== 0 }).concat(arr.filter(function(x) { return x === 0; }));
}
```
- 解法2
```
var moveZeros = function (arr) {
    for (var i = arr.length - 1; i >=0; i--) {
        if (arr[i] === 0) {
            result.push(arr[i]);
        } else {
            result.unshit(arr[i]);
        }
    }
    return result;
}
```

看过简单的解答和聪明的解法，主要的思路就是根据需求将数据分成两类，一类是0，一类是非0，对数组进行筛查，将各种类型择出来，再进行拼接，基本上都是这个思路吧。只不过我的解答比较好想。

