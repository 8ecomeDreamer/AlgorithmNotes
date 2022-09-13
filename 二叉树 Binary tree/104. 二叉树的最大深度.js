// 题目描述：
// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，
//     3
//    / \
//   9  20
//     /  \
//    15   7

// 返回它的最大深度 3 。

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
 * @return {number}
 */
//  bfs
// var maxDepth = function(root) {
//     let maxLevel=0
//     let queue=[]
//     queue.push(root)
//     while(queue.length&&root!=null){
//         let length=queue.length
//         for(var i=0;i<length;i++){
//             let node=queue.shift()
//             node.left&&queue.push(node.left)
//             node.right&&queue.push(node.right)
//         }
//         maxLevel+=1
//     }
//     return maxLevel
// };


// dfs 
var maxDepth = function(root) {
    var dfs=function(node){
        // 递归结束条件
        if(node===null) return 0
           //3. 确定单层逻辑
            let leftdepth=dfs(node.left);
            let rightdepth=dfs(node.right);
            return depth=1+Math.max(leftdepth,rightdepth)

    }
    return dfs(root)
}

// 归纳总结：
// bfs 在层级迭代基础上加一个全局变量maxLevel即可
// dfs 采用递归方式有点抽象