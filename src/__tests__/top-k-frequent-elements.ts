import { topKFrequent } from '../top-k-frequent-elements';

describe('topKFrequent', () => {
    test('finds the k most frequent elements', () => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual(expect.arrayContaining([1, 2]));
        expect(topKFrequent([1], 1)).toEqual([1]);
    });
});