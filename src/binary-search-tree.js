const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    return this.base;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.base) {
      this.base = newNode;
    } else {
      insertNode(this.base, newNode);
    }
    function insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  }

  has(data) {
    return hasNode(this.base, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data
        ? hasNode(node.left, data)
        : hasNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this.base, data);
    function findNode(node, data) {
      if (!node) {
        return null;
      } else if (data < node.data) {
        return findNode(node.left, data);
      } else if (data > node.data) {
        return findNode(node.right, data);
      } else {
        return node;
      }
    }
  }

  remove(data) {
    this.base = removeNode(this.base, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          node = null;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    return minNode(this.base);
    function minNode(node) {
      if (!node.left) {
        return node.data;
      } else {
        return minNode(node.left);
      }
    }
  }

  max() {
    return maxNode(this.base);
    function maxNode(node) {
      if (!node.right) {
        return node.data;
      } else {
        return maxNode(node.right);
      }
    }
  }
};
