// 题目描述：
// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
// 假设二叉树中至少有一个节点。

// 示例 1:

// 输入: root = [2,1,3]
// 输出: 1

// 示例 2:

// 输入: [1,2,3,4,null,5,6,null,null,7]
// 输出: 7

// **
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
//  
//  * @param {TreeNode} root
//  * @return {number}

//思路：  bfs
var findBottomLeftValue = function(root) {
    let tempQueue = [root]
    let lastleftnode=0
    while(tempQueue.length){
        let node = tempQueue.shift()
        if(node.right){
            tempQueue.push(node.right)
        } 
        if(node.left) {
            tempQueue.push(node.left)
        }
        // 判断到达最后一层时使用全局变量接受 换个思路最后的左节点肯定最后一个进
        lastleftnode=node.val
    }
    return lastleftnode

};

// 归纳总结：
// 算法的本质就是穷举，在二叉树中体会的特别深刻。面对二叉树的题可以想想使用dfs还是bfs比较好
// 本题思路在于最左节点是最后一个进 想到了就很简单。