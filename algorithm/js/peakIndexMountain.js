/*
*

寻找山脉数组的峰顶索引

我们把符合下列属性的数组 A 称作山脉：

A.length >= 3
存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
给定一个确定为山脉的数组，返回任何满足
A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。

*

翻译一下就是：找一个数组中的最大数，将这个最大数，在数组中的位置的索引找出来。

但是注意题目中说的，是存在一个给定的数组使得  A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
是一个确定为山脉的数组
理解题目这样就好办了，我们知道确定的峰值，一定是在数组中，而峰值是这个数组中的最大数，比左边的数大，比右边的数大
而左右两边的数字是成有序排列的，在峰值左边的数字程递增趋势，峰值右边的呈递减趋势。

可以使用二分法，找到数组中间的数字，然后比较左右两边的数字，左边大于右边，还是右边大于左边

*/

var peakIdexMountainArray = function (A) {
  let low = 0
  let height = A.length - 1

  while (low <= height) {
    let middle = Math.floor((low + height) / 2)
    let peak = A[middle]

    let peakLeft = A[middle - 1]
    let peakRight = A[middle + 1]

    if (peak > peakLeft && peak > peakRight) {
      return middle
    } else if (peak > peakLeft && peak < peakRight) {
      low = middle + 1
    } else if (peak < peakLeft && peak > peakRight) {
      height = middle - 1
    }
  }
}

// ------- test --------

const a1 = [0, 1, 0]

const peakIndex = peakIdexMountainArray(a1)
console.log(peakIndex)
