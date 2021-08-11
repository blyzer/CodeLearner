/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 中等
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let ans = [],
    queue = [];

  queue.push(root);
  while (queue.length > 0) {
    let temp = [];
    let currentLen = queue.length;
    for (let i = 0; i < currentLen; i++) {
      let node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(temp.slice());
  }

  return ans;
};
