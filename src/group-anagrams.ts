
export function groupAnagrams(strs: string[]): string[][] {
    const anagIdToWords: Map<string, string[]> = new Map();
    for (let w = 0; w < strs.length; w++) {
        let anagId = strs[w].split("").sort().join("");
        if (anagIdToWords.has(anagId)) {
            let words: string[] = [...anagIdToWords.get(anagId) as string[], strs[w]];
            anagIdToWords.set(anagId, words);
        } else {
            anagIdToWords.set(anagId, [strs[w]]);
        }
    }
    const groupedAnagrams: string[][] = [];
    for (let [, val] of anagIdToWords) {
        groupedAnagrams.push(val);
    }
    return groupedAnagrams;
}
/* using a map to represent the anagram elavaluatable code

type WordToWordCodeMapper = {
    word: string,
    wordCode: string,
}
export function groupAnagrams(strs: string[]): string[][] {
    const wordToWordCodeMap: WordToWordCodeMapper[] = [] as WordToWordCodeMapper[];
    for (let w = 0; w < strs.length; w++) {
        const wordCode: Map<string, number> = createWordCode(strs[w]);
        const wordCodeStr: string = createWordCodeStr(wordCode);
        wordToWordCodeMap.push({word: strs[w], wordCode: wordCodeStr});
    }
    const wordCodeToWordList: Map<string, string[]> = new Map();
    for (let w = 0; w < wordToWordCodeMap.length; w++) {
        const word = wordToWordCodeMap[w].word;
        const wordCode = wordToWordCodeMap[w].wordCode;
        if (wordCodeToWordList.has(wordCode)) {
            const wordArray = (wordCodeToWordList.get(wordCode) as string[]);
            wordArray.push(word);
            wordCodeToWordList.set(wordCode, wordArray);
        } else {
            wordCodeToWordList.set(wordCode, [word]);
        }
    }
    const groupedAnagrams: string[][] = [];
    for (let [, val] of wordCodeToWordList) {
        groupedAnagrams.push(val);
    }
    return groupedAnagrams;
}

function createWordCode(word: string): Map<string, number> {
    const wordCode: Map<string, number> = new Map();
    for (let i = 0; i < word.length; i++) {
        if (wordCode.has(word[i])) {
            wordCode.set(word[i], (wordCode.get(word[i]) as number) + 1);
        } else {
            wordCode.set(word[i], 1);
        }
    }
    return wordCode;
}

function createWordCodeStr(wordCode: Map<string, number>): string {
    const a: string[] = [];
    for (let [key, val] of wordCode) {
        let str: string = `${key}${val}`;
        a.push(str);
    }
    const out: string = a.sort().join();
    return out;
}
*/