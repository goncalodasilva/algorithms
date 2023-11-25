export function containsDuplicate(nums: number[]): boolean {
    const numSet: Set<number> = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        const size = numSet.size;
        numSet.add(nums[i]);
        if (size === numSet.size) {
            return true;
        }
    }
    return false;
}