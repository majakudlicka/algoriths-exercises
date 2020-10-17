const LinkedList = require('./util/linkedList');

// iterative approach, converting LLs into numbers
function sumLists(list1, list2) {
    let node1 = list1.head;
    let node2 = list2.head;
    let powerOf10 = 0;
    let sumOfList1 = 0;
    let sumOfList2 = 0;

    while (node1) {
        let val = node1.data * Math.pow(10,powerOf10);
        sumOfList1 += val;
        powerOf10++;
        node1 = node1.next;
    }

    powerOf10 = 0;

    while (node2) {
        sumOfList2 += node2.data * Math.pow(10, powerOf10);
        powerOf10++;
        node2 = node2.next;
    }

    return sumOfList1 + sumOfList2;
}

// Test
const list1 = new LinkedList();
for (let elem of [7,1,6]) {
    list1.insertLast(elem);
}

const list2 = new LinkedList();
for (let elem of [5,9,2]) {
    list2.insertLast(elem);
}

console.log(sumLists(list1, list2));

// recursive approach, converting LLs into numbers
function sumLists2(node1 = null, node2 = null, powerOfTen = 0) {
    const multiplier = Math.pow(10, powerOfTen);
    if (!node1?.next && !node2?.next) return (node1?.data ?? 0) * multiplier + (node2?.data ?? 0) * multiplier;
    return (node1?.data ?? 0) * multiplier + (node2?.data ?? 0) * multiplier + sumLists2(node1?.next, node2?.next, powerOfTen+1);
}

// Test
const list3 = new LinkedList();
for (let elem of [7,1,6,1]) {
    list3.insertLast(elem);
}

const list4 = new LinkedList();
for (let elem of [5,9,2]) {
    list4.insertLast(elem);
}

console.log(sumLists2(list3.head, list4.head));

// Forward & recursive
function sumLists3(l1, l2) {
    const diffInSize = l1.size() - l2.size();
    if (diffInSize > 0) {
        padWithZeros(l2, diffInSize)
    }
    if (diffInSize < 0) {
        padWithZeros(l1, Math.abs(diffInSize));
    }
    const result = new LinkedList();
    const sum = addNodes(result, l1.head, l2.head);
    if (sum.carry) {
        result.insertFirst(sum.carry);
    }
    return result;
}

function padWithZeros(list, padding) {
    for (let i = 0; i < padding; i++) {
        list.insertFirst(0);
    }
    return list;
}


function addNodes(list, node1, node2) {
    if (!node1 && !node2) {
        return { sum: null, carry: 0 };
    }
    const partialSum = addNodes(list, node1.next, node2.next);
    let value = partialSum.carry + node1.data + node2.data;
    partialSum.sum = list.insertFirst(value % 10);
    partialSum.carry = (value - value % 10) /10;
    return partialSum;
}

// Test
const list5 = new LinkedList();
for (let elem of [7, 1, 6, 1]) {
    list5.insertLast(elem);
}

const list6 = new LinkedList();
for (let elem of [9, 2]) {
    list6.insertLast(elem);
}

console.log(sumLists3(list5, list6)._toArray());
