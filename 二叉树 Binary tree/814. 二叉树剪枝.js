// 题目描述：
// 给你二叉树的根结点 root ，此外树的每个结点的值要么是 0 ，要么是 1 。
// 返回移除了所有不包含 1 的子树的原二叉树。
// 节点 node 的子树为 node 本身加上所有 node 的后代。
// 示例 1：

// 输入：root = [1,null,0,0,1]
// 输出：[1,null,0,null,1]
// 解释：
// 只有红色节点满足条件“所有不包含 1 的子树”。 右图为返回的答案。

// 示例 2：

// 输入：root = [1,0,1,0,0,0,1]
// 输出：[1,null,1,null,1]

// 示例 3：

// 输入：root = [1,1,0,1,1,0,1,0]
// 输出：[1,1,0,1,1,null,1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var pruneTree = function(root) {
    // 边界条件
    if(!root) return null
    // 利用指针链式存储的方式
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if(!root.left&&!root.right&&root.val===0){
        return null
    }
    return root

};

// 归纳总结：
// 使用了链表的方式存储 
// null就代表剪掉元素