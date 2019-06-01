const Stack = require("../src/stack");

let stack;
beforeEach(() => {
  stack = new Stack()
});

describe('stack', () => {
  it('should create stack object with an array', () => {
    expect(stack.array).toEqual([]);
  })

  describe('push', () => {
    it('should push item into array', () => {
      expect(stack.push("Bob")).toEqual(["Bob"]);
    });

    it('should push items in an order into array', () => {
      expect(stack.push("Bob")).toEqual(["Bob"]);
      expect(stack.push("Sarah")).toEqual(["Bob", "Sarah"]);
    });

    it('should push, pop and push items in an order into array', () => {
      stack.push("Bob");
      stack.push("Sarah");
      stack.pop();
      expect(stack.push("Paul")).toEqual(["Bob", "Paul"]);
    });
  });

  describe('pop', () => {
    it('should pop item from array', () => {
      stack.push("Bob");
      stack.push("Sarah");
      expect(stack.pop()).toEqual("Sarah");
    });

    it('should pop items in an order from array', () => {
      stack.push("Bob");
      stack.push("Sarah");
      stack.pop()
      expect(stack.pop()).toEqual("Bob");
    });
  });

  describe('peek', () => {
    it('should return undefined if the array is empty', () => {
      // https://jest-bot.github.io/jest/docs/expect.html#tobeundefined
      expect(stack.peek()).toBeUndefined();
    });

    it('should return the first element of stack without mutating array', () => {
      stack.push("Bob");
      expect(stack.peek()).toEqual("Bob");
      expect(stack.array).toEqual(["Bob"]);
    });
  });
});