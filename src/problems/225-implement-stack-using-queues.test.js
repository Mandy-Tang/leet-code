import { MyStack } from "./225-implement-stack-using-queues";

describe("MyStack using queues", () => {
  it("should act like a real stack", () => {
    const testedStack = new MyStack();

    testedStack.push(1);
    testedStack.push(2);
    testedStack.push(3);
    expect(testedStack.pop()).toBe(3);
    expect(testedStack.top()).toBe(2);
    expect(testedStack.empty()).toBeFalsy();
    expect(testedStack.pop()).toBe(2);
    expect(testedStack.top()).toBe(1);
    expect(testedStack.empty()).toBeFalsy();
    expect(testedStack.pop()).toBe(1);
    expect(testedStack.top()).toBeUndefined();
    expect(testedStack.empty()).toBeTruthy();
  });
});
