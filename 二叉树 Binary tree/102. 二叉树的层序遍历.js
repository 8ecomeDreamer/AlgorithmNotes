// 题目描述：
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。


// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

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
//  bfs
var levelOrder = function(root) {
    let queue=[],res=[]
    queue.push(root)
    // 判断节点是否为空
    if(root===null)return res
    while(queue.length!==0){
        // 需要定义一个变量接收长度 否则会冲突
        let length=queue.length
        let curLevel=[]
        for(let i=0;i<length;i++){
            let node = queue.shift()
            curLevel.push(node.val)
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
        res.push(curLevel)
    }
    return res
};

// 归纳总结：
// 需要使用变量保存每次的队列长度，否则会引起冲突