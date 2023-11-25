/** Brute force O(n^2) solution 
 export function twoSum(nums: number[], target: number): number[] {
     for (let i = 0; i < nums.length - 1; i++) {
         for (let j = i + 1; j < nums.length; j++) {
             if ((nums[i] + nums[j]) === target) {
                 return [i, j];
                }
            }
        }
        return [-1, -1];
    }
    */
/** HashMap solution O(n) */
export function twoSum(nums: number[], target: number): number[] {
    const valueToIdxMap: Map<number, number> = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (valueToIdxMap.has(complement)) {
            let compIdx: number = valueToIdxMap.get(complement) as number;
            return i < compIdx ? [i, compIdx] : [compIdx, i];
        }
        valueToIdxMap.set(nums[i], i);
    }
    return [-1, -1];
}
