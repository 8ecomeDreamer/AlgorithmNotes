// 题目描述：
// 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

// 例如：

// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 返回它的最大深度 3 。

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
//  dfs
var maxDepth = function(root) {
    let maxLevel=0
    const dfs=function(node,level){
        // 没有节点就返回
        if(!node) return node
        // 判断
        if(maxLevel<level){
            maxLevel=level
        }
        // 遍历
        node.left&&dfs(node.left,level+1)
        node.right&&dfs(node.right,level+1)
    }
    dfs(root,1)

    return maxLevel
};

// 归纳总结：
// 基础的dfs 性能并不算好 官网的dfs推荐直接递归 bfs则利用队列
