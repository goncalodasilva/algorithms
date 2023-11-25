import { groupAnagrams } from '../group-anagrams';

describe('groupAnagrams', () => {
    test('groups anagrams together', () => {
        const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const output = groupAnagrams(input);
        expect(output.length).toBe(3);
        expect(output).toContainEqual(expect.arrayContaining(["eat", "tea", "ate"]));
        expect(output).toContainEqual(expect.arrayContaining(["tan", "nat"]));
        expect(output).toContainEqual(expect.arrayContaining(["bat"]));
    });
});