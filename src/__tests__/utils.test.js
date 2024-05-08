import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  test("returns true for a palindrome word", () => {
    const word = "racecar";

    const result = isPalindrome(word);

    expect(result).toBe(true);
  });

  test("returns false for a non-palindrome word", () => {
    const word = "car";

    const result = isPalindrome(word);

    expect(result).toBe(false);
  });

  test("returns true for a word with mixed case", () => {
    const word = "RaCecar";

    const result = isPalindrome(word);

    expect(result).toBe(true);
  });

  test("throws an error for a word with non-alphabetic characters", () => {
    const word = "race car";

    expect(() => isPalindrome(word)).toThrow();
  });

  test("throws an error for an empty string", () => {
    const word = "";

    expect(() => isPalindrome(word)).toThrow();
  });
});