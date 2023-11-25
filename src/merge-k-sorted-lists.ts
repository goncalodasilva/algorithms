export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export class minHeap {
    private heap: ListNode[];
    constructor() {
        this.heap = [];
    }
    public print(): number[] {
        return this.heap.map((node) => node.val)
    }

    public remove(): ListNode | null {
        //check if heap is empty
        if (this.heap.length === 0) {
            return null
        }
        // remove from index 0
        // replace with last element
        const retNode = this.heap[0];
        if (this.heap.length === 1) {
            this.heap = [];
            return retNode;
        }
        this.heap[0] = this.heap.pop() as ListNode;
        // heapifyDown
        this.heapifyDown(0);
        return retNode;
    }

    public insert(node: ListNode): void {
        // add to the end of the heap
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);

    }

    public getLength(): number {
        return this.heap.length;
    }

    private heapifyDown(idx: number) {
        const lIdx = (2 * idx) + 1;
        const rIdx = (2 * idx) + 2;
        const curr = this.heap[idx];
        if (rIdx > this.heap.length) {
            // we've reached the end
            // just return
            return
        }
        if (rIdx === this.heap.length) {
            // check only left child
            const lChi = this.heap[lIdx];
            if (curr.val > lChi.val) {
                this.swap(idx, lIdx);
            }
            return
        }
        const lChi = this.heap[lIdx];
        const rChi = this.heap[rIdx];
        // check if should swap left   
        if (lChi.val <= rChi.val && lChi.val < curr.val) {
            this.swap(idx, lIdx)
            return this.heapifyDown(lIdx)
        }
        // check if should swap right
        if (lChi.val >= rChi.val && rChi.val < curr.val) {
            this.swap(idx, rIdx)
            return this.heapifyDown(rIdx)
        }

    }

    private heapifyUp(idx: number) {
        const parIdx = Math.floor((idx - 1) / 2);
        if (parIdx < 0) {
            return
        }
        const parVal = this.heap[parIdx].val
        const currVal = this.heap[idx].val
        if (parVal < currVal) {
            return
        }
        this.swap(parIdx, idx)
        this.heapifyUp(parIdx)
    }

    private swap(i1: number, i2: number) {
        const tmp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = tmp;
    }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap = new minHeap();
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i];
        while (node) {
            heap.insert(node);
            node = node.next;
        }
    }
    const out = heap.remove()
    let curr = out;
    while (curr) {
        curr.next = heap.remove();
        curr = curr.next;
    }
    return out;
};