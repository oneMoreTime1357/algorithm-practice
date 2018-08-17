/**
翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
  if (!root) return null

  let left = root.left
  let right = root.right

  let temp = left
  root.left = invertTree(right)
  root.right = invertTree(temp)
  return root
};

// ------------- test -----------------

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var one = new TreeNode(8)
var two = new TreeNode(4)
var root = new TreeNode(3)
root.left = one
root.right = two
console.log(root)
console.log(invertTree(root))