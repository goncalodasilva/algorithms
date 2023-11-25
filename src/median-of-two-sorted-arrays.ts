export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    return findMedianSortedArray(mergeSortedArrays(nums1, nums2));

};

function mergeSortedArrays(nums1: number[], nums2: number[]): number[] {
    let out: number[] = [];
    let [i, j]: number[] = [0, 0];
    do {
        if (nums1[i] < nums2[j]) {
            out.push(nums1[i++]);
        } else {
            out.push(nums2[j++]);
        }
        if (i >= nums1.length) {
            out.push(nums2.slice(j, -1))
        }
    } while (i < nums1.length && j < nums2.length)
    return out;
}

function findMedianSortedArray(arr: number[]): number {
    console.log(arr)
    if (arr.length % 2 === 0) {
        return (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2;
    }
    return arr[Math.floor(arr.length / 2)];
}