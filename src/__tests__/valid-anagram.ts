import { isAnagram } from '../valid-anagram';

describe('isAnagram', () => {
    test('checks if two strings are anagrams of each other', () => {
        expect(isAnagram('anagram', 'nagaram')).toBe(true);
        expect(isAnagram('rat', 'car')).toBe(false);
        expect(isAnagram('a', 'a')).toBe(true);
        expect(isAnagram('ab', 'a')).toBe(false);
    });
});
