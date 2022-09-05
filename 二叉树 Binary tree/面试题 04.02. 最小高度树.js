// 题目描述：
// 给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。
// 示例:

// 给定有序数组: [-10,-3,0,5,9],

// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//           0 
//          / \ 
//        -3   9 
//        /   / 
//      -10  5 


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//  思路：类似于二分查找解题
var sortedArrayToBST = function(nums) {
    if(nums.length==0){
        return null
    }else{
        // 相当于向下取整
        let midIndex = nums.length>>1
        // 创建节点树
        let tree = new TreeNode(nums[midIndex])
        tree.left=sortedArrayToBST(nums.slice(0,midIndex))
        tree.right=sortedArrayToBST(nums.slice(midIndex+1))
        return tree
    }
};

// 归纳总结：类似与二分查找思路做题
// 基础不够扎实，不会创建节点