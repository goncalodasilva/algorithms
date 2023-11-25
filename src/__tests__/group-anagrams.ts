import { groupAnagrams } from '../group-anagrams';

describe('groupAnagrams', () => {
    test('groups anagrams together', () => {
        const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        console.log(input);
        const output = groupAnagrams(input);
        console.log(output);
        expect(output.length).toBe(3);
        expect(output).toContainEqual(expect.arrayContaining(["eat", "tea", "ate"]));
        expect(output).toContainEqual(expect.arrayContaining(["tan", "nat"]));
        expect(output).toContainEqual(expect.arrayContaining(["bat"]));
        const output2 = groupAnagrams(["",""]);
        console.log(output2);
        expect(output2.length).toBe(1);
        expect(output2).toContainEqual(expect.arrayContaining(["", ""]));
        //expect(groupAnagrams()).toContainEqual(expect.arrayContaining());
        
    });
});