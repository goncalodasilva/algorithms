import { ListNode, minHeap } from '../merge-k-sorted-lists';

describe('minHeap', () => {
    let heap: minHeap;

    beforeEach(() => {
        heap = new minHeap();
    });
    /*
        test('minHeap operations', () => {
            const nodes = [
                new ListNode(20),
                new ListNode(30),
                new ListNode(1),
                new ListNode(2),
                new ListNode(69),
                new ListNode(420),
                new ListNode(1200),
                new ListNode(4200),
                new ListNode(28),
                new ListNode(68),
                new ListNode(69),
            ];
    
            nodes.forEach(node => heap.insert(node));
    
            const sortedNodes = nodes.sort((a, b) => a.val - b.val);
    
            let i: number = 1;
            sortedNodes.forEach(node => {
                console.log(i++)
                const out = heap.remove();
                console.log("out", out?.val)
                console.log("node", node.val)
                expect(out).toEqual(node);
            });
        });*/

    test('simple test', () => {
        const n1 = new ListNode(420)
        const n2 = new ListNode(69)
        const n3 = new ListNode(3)
        const n4 = new ListNode(200)
        const n5 = new ListNode(10)
        const n6 = new ListNode(100)
        const n7 = new ListNode(1000)
        const n8 = new ListNode(2)
        const n9 = new ListNode(1)


        heap.insert(n1);
        heap.insert(n2);
        heap.insert(n3);
        heap.insert(n4);
        heap.insert(n5);
        heap.insert(n6);
        heap.insert(n7);
        heap.insert(n8);
        heap.insert(n9);

        expect(heap.remove()).toEqual(n9);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n8);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n3);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n5);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n2);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n6);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n4);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n1);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n7);
        console.log(heap.print())
    });

    test('simple test 2', () => {
        const n1 = new ListNode(1)
        const n2 = new ListNode(4)
        const n3 = new ListNode(5)
        const n4 = new ListNode(1)
        const n5 = new ListNode(3)
        const n6 = new ListNode(4)
        const n7 = new ListNode(2)
        const n8 = new ListNode(6)

        heap.insert(n1);
        heap.insert(n2);
        heap.insert(n3);
        heap.insert(n4);
        heap.insert(n5);
        heap.insert(n6);
        heap.insert(n7);
        heap.insert(n8);

        expect(heap.remove()).toEqual(n1);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n4);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n7);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n5);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n2);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n6);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n3);
        console.log(heap.print())
        expect(heap.remove()).toEqual(n8);
    });
});