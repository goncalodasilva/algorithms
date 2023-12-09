import { twoSum } from '../two-sum-ii-input-array-is-sorted';

describe('twoSum', () => {
    test('finds two numbers such that they add up to a specific target number', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
        expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
        expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
    });
});