import { findMedianSortedArrays } from '../median-of-two-sorted-arrays';

describe('findMedianSortedArrays', () => {
    test('finds the median of two sorted arrays', () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
        expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0.0);
        expect(findMedianSortedArrays([], [1])).toBe(1.0);
        expect(findMedianSortedArrays([2], [])).toBe(2.0);
    });
});