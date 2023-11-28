export function longestConsecutive(nums: number[]): number {
    const m: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (m.has(n)) { continue; }
        if (m.has(n - 1) && m.has(n + 1) && m.get(n - 1) as number < n && m.get(n + 1) as number > n) {
            //merge
            const lo = m.get(n - 1) as number;
            const hi = m.get(n + 1) as number;
            m.delete(n - 1);
            m.delete(n + 1);
            m.set(lo, hi);
            m.set(hi, lo);
            continue;
        }
        if (m.has(n - 1) && m.get(n - 1) as number < n) {
            const lo = m.get(n - 1) as number;
            m.delete(n - 1);
            m.set(lo, n);
            m.set(n, lo);
            continue;
        }
        if (m.has(n + 1) && m.get(n + 1) as number > n) {
            const hi = m.get(n + 1) as number;
            m.delete(n + 1);
            m.set(hi, n);
            m.set(n, hi);
            continue;
        }
        m.set(n, n);
    }
    let longest = 0;
    for (let [key, val] of m) {
        if (Math.abs(key - val) + 1 > longest) {
            longest = Math.abs(key - val) + 1;
            console.log(key, val);
        }
    }
    return longest;
};