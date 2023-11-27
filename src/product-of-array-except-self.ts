// Brute force solution
// Better performing solutions can use dynamic programming, which I haven't learned yet

export function productExceptSelf(nums: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i === j) { continue; }
            prod *= nums[j];
        }
        //if (prod === 0) { prod = 0; }
        result.push(prod);
    }
    return result;
};