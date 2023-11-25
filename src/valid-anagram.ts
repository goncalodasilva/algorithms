/*
    SPLIT = O(n)
    SORT = O(nlogn)
    JOIN = O(n)

    TOTAL = O(nlogn)
export function isAnagram(s: string, t: string): boolean {
    const sAnagId: string = s.split("").sort().join("");
    const tAnagId: string = t.split("").sort().join("");
    return sAnagId == tAnagId;
}
*/
/*

    USING MAP TO REPRESENT EACH ANAGRAM     O(n)

*/

export function isAnagram(s: string, t: string): boolean {
    const sMap: Map<string, number> = new Map<string, number>();
    const tMap: Map<string, number> = new Map<string, number>();

    stringToMap(s, sMap);
    stringToMap(t, tMap);

    return compareMaps(sMap, tMap); 
}

function stringToMap(s: string, m: Map<string, number>) {
    for (let i = 0; i < s.length; i++) {
        if (m.get(s[i])) {
            m.set(s[i], (m.get(s[i]) as number) + 1);
        } else {
            m.set(s[i], 1);
        }
    }
}

function compareMaps(m1: Map<string, number>, m2: Map<string, number>): boolean {
    if (m1.size !== m2.size) {
        return false;
    }

    for (let [key, val] of m1) {
        if (val !== m2.get(key)) {
            return false;
        }
    }
    return true;
}