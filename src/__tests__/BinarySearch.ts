import { bs } from '../BinarySearch'

describe('BinarySearch', () => {
    test('checks if an array contains a number and its index', () => {
        expect(bs([1, 1, 2, 3], 1)).toBe(1);
        expect(bs([1, 2, 3, 4], 4)).toBe(3);
        expect(bs([1, 3, 6, 8, 9, 10, 15, 60, 100, 550], 7)).toBe(-1);
        expect(bs([1, 3, 6, 8, 9, 10, 15, 60, 100, 550], 100)).toBe(8);
        expect(bs([1, 3, 6, 8, 9, 10, 15, 60, 100, 550], 15)).toBe(6);
    });
});