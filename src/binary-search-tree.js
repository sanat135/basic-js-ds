const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = node;
      return;
    }

    let current = this.rootNode;

    while (true) {
      if (data === current.data) {
        return;
      }

      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return;
        }

        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.rootNode;

    while (current !== null) {
      if (data === current.data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    let parent = null;
    let current = this.rootNode;

    while (current !== null && current.data !== data) {
      parent = current;

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (current === null) {
      return;
    }

    if (current.left !== null && current.right !== null) {
      let successorParent = current;
      let successor = current.right;

      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }

      current.data = successor.data;

      parent = successorParent;
      current = successor;
    }

    const child =
      current.left !== null ? current.left : current.right;

    if (parent === null) {
      this.rootNode = child;
    } else if (parent.left === current) {
      parent.left = child;
    } else {
      parent.right = child;
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }

    let current = this.rootNode;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }

    let current = this.rootNode;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};