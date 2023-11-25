import { ListNode } from '../merge-k-sorted-lists.ts';
import { mergeKLists } from '../merge-k-sorted-lists.ts';

test('mergeKLists merges lists correctly', () => {
    const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const list3 = new ListNode(2, new ListNode(6));
    const lists = [list1, list2, list3];

    const result = mergeKLists(lists);
    //console.log(toArray(result));
    expect(result).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6)))))))));
});

// converts a linked list into an array
function toArray(list: ListNode | null): number[] {
    const result: number[] = [];
    let curr = list;
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}