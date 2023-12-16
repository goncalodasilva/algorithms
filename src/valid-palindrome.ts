export function isPalindrome(s: string): boolean {
    const regex: RegExp = /[a-zA-Z0-9]/;
    // 1st base case: s.len = 0
    // return true
    if (s.length === 0) {
        return true;
    }

    // 2nd base case: s.len = 1
    // return true
    /* Actually not needed
    if (s.length === 1) {
        return true;
    }
    */

    let i = 0;
    let j = s.length - 1;
    // do while loop, while (i < j)
    do {
        if (i === j) {
            return true
        }
        // if s[i] is non alphabetical, i++, continue
        if (!regex.test(s[i])) {
        //if (!s[i].match(regex)) {
            //console.log(`non-alpha i: s[i] ${i}: ${s[i]}`);
            i++;
            continue;
        }
        // if s[j] is non alphabetical, j--, continue
        if (!regex.test(s[j])) {
        //if (!s[j].match(regex)) {
            //console.log(`non-alpha i: s[j] ${j}: ${s[j]}`);
            j--; 
            continue;
        }
        // if s[i] = s[j], i++, j--
        // else return false
        if (s[i].toLocaleLowerCase() === s[j].toLocaleLowerCase()) {
            //console.log(`match i, j: s[i], s[j] - ${i}, ${j}: ${s[i]}, ${s[j]}`);
            i++;
            j--;
        } else {
            //console.log(`mismatch i, j: s[i], s[j] - ${i}, ${j}: ${s[i]}, ${s[j]}`);
            return false;
        }
        
    } while (i <= j)

    return true;

};