import { MyQueue } from "./232-implement-queue-using-stacks";

describe("implement queue using stacks", () => {
  it("should act like a queue", () => {
    const testQueue = new MyQueue();
    testQueue.push(1);
    testQueue.push(2);
    expect(testQueue.peek()).toBe(1);
    expect(testQueue.pop()).toBe(1);
    expect(testQueue.empty()).toBeFalsy();
    expect(testQueue.peek()).toBe(2);
    expect(testQueue.pop()).toBe(2);
    expect(testQueue.empty()).toBeTruthy();
  });
});
