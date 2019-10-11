/**
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

示例 :
给定二叉树

          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

注意：两结点之间的路径长度是以它们之间边的数目表示。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diameter-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
  let result=0;
  deep(root);
  return result;
  
  function deep(root) {
    if(!root) return 0;
    console.log(root.left, 88)

    let left = root.left ? deep(root.left) + 1 : 0;
    let right = root.right ? deep(root.right)+1 : 0;
    result = Math.max(left + right, result);
    return Math.max(left, right);
  }
};

let rootTree = {
  val: 1,
  right: { val: 3, right: null, left: null },
  left: {
     val: 2,
     right: { val: 5, right: null, left: null },
     left: { val: 4, right: null, left: null } } }

console.log(diameterOfBinaryTree(rootTree))