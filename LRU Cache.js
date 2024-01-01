// Constructor : Initializes the LRUCache with capacity
module.exports = {
  LRUCache: function (capacity) {
    let map = new Map();
    let dll = new DoubleLinkedList();

    return {
      // get function returns an integer
      get: function (key) {
        if (map.has(key)) {
          let dllNode = map.get(key);
          dll.deleteNode(dllNode);
          dll.insertAtEnd(dllNode);
          return dllNode.data.value;
        } else {
          return -1;
        }
      },
      // set returns nothing
      set: function (key, value) {
        if (map.has(key)) {
          let dllNode = map.get(key);
          dll.deleteNode(dllNode);
          dllNode.data.value = value;
          dll.insertAtEnd(dllNode);
        } else {
          if (map.size >= capacity) {
            map.delete(dll.head.data.key);
            dll.deleteFromStart();
          }
          let newNode = new DLLNode(new Pair(key, value));
          map.set(key, newNode);
          dll.insertAtEnd(newNode);
        }
      },
    };
  },
};

class Pair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class DLLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  length = 0;
  head = null;
  tail = null;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  deleteNode(node) {
    let prevNode = node.prev;
    let nextNode = node.next;
    if (prevNode != null) {
      prevNode.next = nextNode;
    } else {
      this.head = nextNode;
    }
    if (nextNode != null) {
      nextNode.prev = prevNode;
    } else {
      this.tail = prevNode;
    }
    node.next = null;
    node.prev = null;
    if (this.length > 0) {
      this.length--;
    }
  }

  deleteFromStart() {
    if (this.head != null) {
      if (this.head.next == null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.length--;
    }
  }

  insertAtEnd(node) {
    if (this.tail == null) {
      this.head = node;
      this.tail = node;
      node.next = null;
      node.prev = null;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = this.tail.next;
    }
    this.length++;
  }
}
