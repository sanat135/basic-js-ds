const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

    getUnderlyingList() {
    if (this.head === null) {
      return null;
    }

    const result = {
      value: this.head.value,
      next: null,
    };

    let source = this.head.next;
    let current = result;

    while (source !== null) {
      current.next = {
        value: source.value,
        next: null,
      };

      current = current.next;
      source = source.next;
    }

    return result;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return value;
  }
}

module.exports = {
  Queue,
};