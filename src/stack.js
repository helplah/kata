module.exports = class Stack {
  constructor() {
    this.array = [];
  }

  push(item) {
    this.array.push(item);
    return this.array;
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }
};
