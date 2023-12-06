export function bs(arr: number[], needle: number): number {
    if (arr.length === 0) {
        return -1;
    }

    if (arr.length === 1) {
        if (arr[0] === needle) {
            return 0;
        }
        return -1;
    }

    let hi = arr.length -1;
    let lo = 0;
    
    while (hi >= lo) {
        const mid = lo + Math.floor((hi - lo) / 2);
        console.log[mid]
        
        if (arr[mid] === needle) {
            return mid;
        }
        if (arr[mid] > needle) {
            // search the left
            hi = mid - 1;
        }
        if (arr[mid] < needle) {
            // search the right
            lo = mid + 1;
        }
    }

    return -1;    

}