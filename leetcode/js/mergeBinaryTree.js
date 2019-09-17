/*
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

示例 1:

输入:
  Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
输出:
合并后的树:
       3
      / \
     4   5
    / \   \
   5   4   7
注意: 合并必须从两个树的根节点开始。

*/

// -------------------------solution------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (t1 === null) {
      return t2
  }
  if (t2 === null) {
      return t1
  }

  let root = new TreeNode(t1.val + t2.val)
  root.left = mergeTrees(t1.left, t2.left)
  root.right = mergeTrees(t1.right, t2.right)
  return root
};


/*
解答完成再回来看这道题不是很难，主要用到了递归，递归真的是个好东西
语言很简洁，代码也很简练。

只是对于二叉树的形态一直不太理解，如下打印出来了二叉树如何用代码表示

*/


// -----------test，打印出来的二叉树输入如下------------------------------
/**
TreeNode {
val: 1,
right: TreeNode { val: 2, right: null, left: null },
left:
 TreeNode {
   val: 3,
   right: null,
   left: TreeNode { val: 5, right: null, left: null } } }

TreeNode {
val: 2,
right:
 TreeNode {
   val: 3,
   right: TreeNode { val: 7, right: null, left: null },
   left: null },
left:
 TreeNode {
   val: 1,
   right: TreeNode { val: 4, right: null, left: null },
   left: null } }
*/
