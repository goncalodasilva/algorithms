export function longestConsecutive(nums: number[]): number {
    let longest = 0;
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
            longest = newLongest(lo, hi, longest);
            continue;
        }
        if (m.has(n - 1) && m.get(n - 1) as number < n) {
            const lo = m.get(n - 1) as number;
            m.delete(n - 1);
            m.set(lo, n);
            m.set(n, lo);
            longest = newLongest(lo, n, longest);
            continue;
        }
        if (m.has(n + 1) && m.get(n + 1) as number > n) {
            const hi = m.get(n + 1) as number;
            m.delete(n + 1);
            m.set(hi, n);
            m.set(n, hi);
            longest = newLongest(n, hi, longest);
            continue;
        }
        m.set(n, n);
        if (longest === 0) {
            longest++;
        }
    }
    return longest;
};

function newLongest(lo: number, hi: number, curr: number): number {
    if (hi - lo + 1 > curr) {
        curr = hi - lo + 1;
    }
    return curr;
}