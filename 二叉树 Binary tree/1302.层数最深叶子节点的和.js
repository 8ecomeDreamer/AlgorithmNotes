// 题目描述：
// 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。
// 输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// 输出：15
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
 // 广度优先搜索思路：对同一层节点优先遍历
var BFS  = function(root) {
    let sum = 0
    const tempQueue=[]
    tempQueue.push(root)
    while(tempQueue.length){
        sum = 0
        const size = tempQueue.length 
        for(var i=0;i<size;i++){
            const node = tempQueue.shift()
            sum+=node.val
            if(node.left){
                tempQueue.push(node.left)
            }
            if(node.right){
                tempQueue.push(node.right)
            }
        }
        
    }
};

// 深度优先搜索：深搜本质上就是暴力搜索，遍历了所有可能的情况，必然能得到解。
//  var dfs = function(root) {
//     let maxLevel = -1
//     let sum = 0
//     const dfsNode = function (node,level) {
//         // 无节点即返回
//         if(!node){
//             return 
//         }
//         // 寻找节点层数是否最大
//         if(level > maxLevel){
//             maxLevel = level
//             sum = node.val
//         }
//         else if (level == maxLevel){
//             sum += node.val
//         }
//         dfsNode(node.left,level+1)
//         dfsNode(node.right,level+1)
//     }
//     dfsNode(root,0)
//     return sum
//  }

// 归纳总结：这题有广度优先搜索以及深度优先搜索的方法
// 广度优先搜索思路在于先遍历同一层的节点 难点只是在于如何同一时间只遍历同一层节点 
// 解决办法则是先利用队列存储同一层节点 在使用for循环遍历该队列依次存储其子节点使用全局变量存储节点val,最深层节点即最后一次的循环

// 深度优先搜索思路在于暴力遍历树 难点只是如何判断该节点是否处于最深层
// 解决办法则是定义一个最大层变量以及节点值总和 当遍历时与其进行判断并更改其值
