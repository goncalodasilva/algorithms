//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

function addInArrValueMap(map: Map<number, number[]>, key: number, newVal: number): void {
    if (map.has(key)) {
        const currArr = map.get(key) as number[];
        currArr.push(newVal);
        return;
    }
    map.set(key, [newVal]);
}

function removeInArrValueMap(map: Map<number, number[]>, key: number, oldVal: number): void {
    if (map.has(key)) {
        const currArr = map.get(key) as number[];
        const idx = currArr.indexOf(oldVal);
        if (idx === -1) {
            return;
        }
        const newArr = [...currArr.slice(0, idx), ...currArr.slice(idx + 1)];
        map.set(key, newArr);
    }
}

export function topKFrequent(nums: number[], k: number): number[] {
    let topCts = 0;
    const record: Map<number, number> = new Map();
    const revRecord: Map<number, number[]> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let cts: number = 0;
        if (record.has(num)) {
            cts = record.get(num) as number;
            // remove from revRecord
            removeInArrValueMap(revRecord, cts, num);
            // increment in record
            cts++;
            record.set(num, cts);
            // add in new key in revRecord
            addInArrValueMap(revRecord, cts, num);
        } else {
            cts = 1;
            // add to record as 1
            record.set(num, cts);
            // add to revRecs
            addInArrValueMap(revRecord, cts, num);
        }
        if (cts > topCts) {
            topCts = cts;
        }
    }

    const topKFrequent: number[] = [];
    while (topKFrequent.length < k && topCts > 0) {
        if (revRecord.has(topCts)) {
            topKFrequent.push(...revRecord.get(topCts) as number[]);
        }
        topCts--;
    }
    return topKFrequent;
}