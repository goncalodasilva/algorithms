import { productExceptSelf } from '../product-of-array-except-self';

describe('productExceptSelf', () => {
    test('returns an array where each element is the product of all the numbers in the original array except for the number at the current index', () => {
        expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
        expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
    });
});