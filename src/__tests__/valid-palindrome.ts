import { isPalindrome } from '../valid-palindrome';

describe('isPalindrome', () => {
    test('checks if a string is a palindrome', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
        expect(isPalindrome("race a car")).toBe(false);
        expect(isPalindrome(" ")).toBe(true);
        expect(isPalindrome("0P")).toBe(false);
    });
});