// 题目描述：
// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 例如输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

 

// 示例 1：

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]


var mirrorTree = function(root) {
  if (root === null) {
      return null;
  }
  const left = mirrorTree(root.left);
  const right = mirrorTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// 归纳总结：
// 左右子树可以直接交换