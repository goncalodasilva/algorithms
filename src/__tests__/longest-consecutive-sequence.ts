import { longestConsecutive } from '../longest-consecutive-sequence';
import { monterousArray } from './arrays';

describe('longestConsecutive', () => {
    test('finds the length of the longest consecutive elements sequence', () => {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
        expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
        expect(longestConsecutive(monterousArray)).toBe(290);
    });
});