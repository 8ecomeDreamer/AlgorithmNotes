// 题目描述：
// 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）


// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[15,7],[9,20],[3]]

// 示例 2：

// 输入：root = [1]
// 输出：[[1]]

// 示例 3：

// 输入：root = []
// 输出：[]

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
 * @return {number[][]}
 */
//  bfs reverse
var levelOrderBottom = function(root) {
    let queue=[],res=[]
    queue.push(root)
    while(queue.length&&root!=null){
        let length=queue.length
        let tmp=[]
        for(var i=0;i<length;i++){
            let node=queue.shift()
            tmp.push(node.val)
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
        res.push(tmp)
    }
    return res.reverse()

};


// 归纳总结：
// 在层序遍历的基础上翻转结果数组即可