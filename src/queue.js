module.exports = class Queue {
  constructor() {
    this.array = [];
  }

  enqueue(item) {
    this.array.push(item);
    return this.array;
  }

  dequeue() {
    return this.array.shift();
  }

  peek() {
    return this.array[0];
  }
};
