const LinkedList = require('./util/linkedList');

function partition(list, partition) {
    const headList = new LinkedList();
    let lastInHead = null;
    const tailList = new LinkedList();
    let lastInTail = null;

    let node = list.head;
    while (node) {
        if (node.data < partition) {
            if (!headList.head) {
                headList.head = node;
            } else {
                lastInHead.next = node;
            }
            lastInHead = node;
        } else {
            if (!tailList.head) {
                tailList.head = node;
            } else {
                lastInTail.next = node;
            }
            lastInTail = node;
        }
        node = node.next;
    }

    lastInHead.next = tailList.head;
    lastInTail.next = null;
    return headList;
}

const list = new LinkedList();
for (let elem of [3,5,8,5,10,2,1]) {
    list.insertLast(elem);
}

console.log('Before partition ', list._toArray());
const newList = partition(list, 5);
console.log('After partition ',newList._toArray());


// Not preserving the order of the values
function partition2(list, partition) {
    let node = list.head;
    let head = node;
    let tail = node;


    while (node) {
        let next = node.next;
        if (node.data < partition) {
            // First we crete a circular ref to node itself
            node.next = head;
            head = node;
        } else {
            // But then we overwrite it here
            tail.next = node;
            tail = node;
        }
        node = next;
    }

    tail.next = null;
    return new LinkedList(head);
}

const list2 = new LinkedList();
for (let elem of [3,5,8,5,10,2,1]) {
    list2.insertLast(elem);
}

console.log('Before partition ', list2._toArray());
const newList2 = partition2(list2, 5);
console.log('After partition ',newList2._toArray());
