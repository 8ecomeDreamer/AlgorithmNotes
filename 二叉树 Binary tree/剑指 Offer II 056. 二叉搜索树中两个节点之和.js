// 题目描述：
// 给定一个二叉搜索树的 根节点 root 和一个整数 k , 请判断该二叉搜索树中是否存在两个节点它们的值之和等于 k 。假设二叉搜索树中节点的值均唯一。

// 示例 1：

// 输入: root = [8,6,10,5,7,9,11], k = 12
// 输出: true
// 解释: 节点 5 和节点 7 之和等于 12

// 示例 2：

// 输入: root = [8,6,10,5,7,9,11], k = 22
// 输出: false
// 解释: 不存在两个节点值之和为 22 的节点

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
 * @param {number} k
 * @return {boolean}
 */
    //         8
    //     6       10
    // 5      7 9     11

// 使用dfs+哈希表
var findTarget = function(root, k) {
    let set = new Set()
    // dfs
    const helper =(root,k) => {
        if(!root) return false
        if(set.has(k-root.val)){
            return true
        }
        set.add(root.val)
        return helper(root.left, k) || helper(root.right, k);
    }
    return helper(root, k);
};

// 归纳总结：使用二叉树+哈希表的方法解题