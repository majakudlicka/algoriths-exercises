const LinkedList = require('./util/linkedList');

function removeDupes(list) {
    let node = list.head;
    const values = new Set();
    let previous = null;
    while (node) {
        if (values.has(node.data)) {
            previous.next = node.next;
        } else {
            values.add(node.data);
            previous = node;
        }
        node = node.next;
    }

    return list;
}

const list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
    list.insertLast(elem);
}

console.log('list before ',list._toArray());
removeDupes(list);
console.log(list._toArray()); // [1, 5, 6, 8]

// Without taking extra space, n^2
function removeDupes2(list) {
    let current = list.head;
    while (current) {
        let runner = current;
        while (runner.next) {
            if (current.data === runner.next.data) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }

    return list;
}

console.log('list before ',list._toArray());
removeDupes2(list);
console.log(list._toArray()); // [1, 5, 6, 8]
