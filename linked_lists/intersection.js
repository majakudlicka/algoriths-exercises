const LinkedList = require('./util/linkedList');

/**
 * Find out the length of the two lists first. If they intersect at some point
 * then the length of their tails will be the same and any difference in length
 * must be from before they intersect. If the lists are different lengths then
 * skip the difference in the longer list. Walk through both lists in step until
 * a node that is the same in both lists is found or the end of one of the lists
 * is reached.
 *
 * Time: O(A+B)
 * Additional space: O(1)
 */
function intersection2(list1, list2) {
    let size1 = list1.size();
    let size2 = list2.size();
    let node1 = list1.head;
    let node2 = list2.head;
    let diffInSize = size1 - size2;
    if (diffInSize > 0) {
        node1 = advanceForward(node1, diffInSize);
    }
    if (diffInSize < 0) {
        node2 = advanceForward(node2, Math.abs(diffInSize));
    }
    while (node1 && node2) {
        if (node1 === node2)  {
            return node1;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    return null;
}

function advanceForward(node, steps) {
    for (let i = 0; i < steps; i++) {
        node = node.next;
    }
    return node;
}

const list1 = new LinkedList();
for (let elem of [1,2,5,2,1]) {
    list1.insertLast(elem);
}
const intersectingNode = list1.head.next.next; // 5

const list2 = new LinkedList();
for (let elem of [9,9,7]) {
    list2.insertLast(elem);
}

list2.head.next.next.next = intersectingNode;
// true
console.log(intersection(list1, list2));

const list3 = new LinkedList();
for (let elem of [1,2,5,2,1]) {
    list3.insertLast(elem);
}

const list4 = new LinkedList();
for (let elem of [9,9,7,5,2,1]) {
    list4.insertLast(elem);
}

// false
console.log(intersection(list3, list4));

// Finds if two linked lists intersect and if so, returns the intersection node
function intersection(list1, list2) {
    let res = null;
    let node1 = list1.head;
    while (node1) {
        node1.visited = true;
        node1 = node1.next;
    }
    let node2 = list2.head;
    while (node2) {
        if (!res && node2.visited)  {
            res = node2;
        }
        node2 = node2.next;
    }
    node1 = list1.head;
    // Clean up
    while (node1) {
        delete node1.visited;
        node1 = node1.next;
    }
    return res;
}

const list5 = new LinkedList();
for (let elem of [1,2,5,2,1]) {
    list5.insertLast(elem);
}
const intersectingNode2 = list5.head.next.next; // 5

const list6 = new LinkedList();
for (let elem of [9,9,7]) {
    list6.insertLast(elem);
}

list6.head.next.next.next = intersectingNode2;
// true
console.log(intersection2(list5, list6));

const list7 = new LinkedList();
for (let elem of [1,2,5,2,1]) {
    list7.insertLast(elem);
}

const list8 = new LinkedList();
for (let elem of [9,9,7,5,2,1]) {
    list8.insertLast(elem);
}

// false
console.log(intersection2(list7, list8));
