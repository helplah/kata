const Queue = require("../src/queue");

let queue;
beforeEach(() => {
  queue = new Queue();
});

describe("queue", () => {
  it("should create queue object with an array", () => {
    // https://jestjs.io/docs/en/expect#tohavepropertykeypath-value
    expect(queue).toHaveProperty("array", []);
  });

  describe("enqueue", () => {
    it("should enqueue person into array", () => {
      expect(queue.enqueue("Bob")).toEqual(["Bob"]);
    });

    it("should enqueue two or more people in an order into array", () => {
      queue.enqueue("Bob");
      expect(queue.enqueue("Sarah")).toEqual(["Bob", "Sarah"]);
    });

    it("should add, remove and add people in an order into array", () => {
      queue.enqueue("Bob");
      queue.dequeue();
      expect(queue.enqueue("Sarah")).toEqual(["Sarah"]); 
    })
  });
  
  describe("dequeue", () => {
    it("should remove person from array", () => {
      queue.enqueue("Bob");
      expect(queue.dequeue()).toEqual("Bob");
    })

    it("should remove two or more people in an order from array", () => {
      queue.enqueue("Bob");
      queue.enqueue("Sarah");
      queue.dequeue();
      expect(queue.dequeue()).toEqual("Sarah");      
    })
  });

  describe('peek', () => {
    it('should return the first element of array', () => {
      queue.enqueue("Bob");
      queue.enqueue("Sarah");
      expect(queue.peek()).toEqual("Bob");
    });

    it('should return the first element of array after dequeue', () => {
      queue.enqueue("Bob");
      queue.enqueue("Sarah");
      queue.dequeue();
      expect(queue.peek()).toEqual("Sarah");
    });
  });
});
