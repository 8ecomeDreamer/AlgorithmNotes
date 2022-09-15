// 题目描述：
// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

// 叶子节点 是指没有子节点的节点。
 

// 示例 1：

// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]

// 示例 2：

// 输入：root = [1]
// 输出：["1"]

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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    //递归遍历+递归三部曲
    let res=[];
    //1. 确定递归函数 函数参数
    const getPath=function(node,curPath){
     //2. 确定终止条件，到叶子节点就终止
        if(node.left===null&&node.right===null){
            curPath+=node.val;
            res.push(curPath);
            return ;
        }
        //3. 确定单层递归逻辑
        curPath+=node.val+'->';
        node.left&&getPath(node.left,curPath);
        node.right&&getPath(node.right,curPath);
    }
    getPath(root,'');
    return res;
 };

 // 归纳总结：
//  可以多理解理解递归的用法以及写法
