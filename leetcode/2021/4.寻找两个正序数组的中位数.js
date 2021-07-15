/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出并返回这两个正序数组的 中位数
 * 要求：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*
* 这种解法时间复杂度是m+n，先把两个数组合并成有序的数组，
* 如果是偶数长度，中位数就是，中间两个数之和除以2
* 如果是奇数长度，中位数是，中间那一位
*/
var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  // 处理特殊情况，其中一个数组为空的情况，以另一个数组的长度来计算
  if (len1 === 0) {
    if (len2 % 2 === 0) {
      return (nums2[len2 / 2 - 1] + nums2[len2 / 2]) / 2
    } else {
      return nums2[Math.floor(len2 / 2)]
    }
  }

  if (len2 === 0) {
    if (len1 % 2 === 0) {
      return (nums1[len1 / 2 -1] + nums1[len1 / 2]) / 2
    } else {
      return nums1[Math.floor(len1 / 2)]
    }
  }

  // 分而治之，归并排序，比较大小，放到新数组中
  let count = 0, i = 0, j = 0
  let nums = new Array(len1 + len2)
  while (count !== (len1 + len2)) {
    if (i === len1) {
      while (j !== len2) {
        nums[count++] = nums2[j++]
      }
      break;
    }

    if (j === len2) {
      while (i !== len1) {
        nums[count++] = nums1[i++]
      }
      break;
    }

    if (nums1[i] < nums2[j]) {
      nums[count++] = nums1[i++]
    } else {
      nums[count++] = nums2[j++]
    }
  }

  if (count % 2 === 0) {
    // 由于数组是从0开始的，中间的数字除以2要减1
    return (nums[count / 2 - 1] + nums[count / 2]) / 2
  } else {
    return nums[Math.floor(count / 2)]
  }
};
// @lc code=end

