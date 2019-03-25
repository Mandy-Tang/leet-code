import { scoreOfParentheses } from "./856-score-of-parentheses";

describe("score of parentheses", () => {
  it("should return the score correctly", () => {
    // expect(scoreOfParentheses("()")).toBe(1);
    // expect(scoreOfParentheses("(())")).toBe(2);
    // expect(scoreOfParentheses("()()")).toBe(2);
    expect(scoreOfParentheses("(()(()))")).toBe(6);
  });
});
