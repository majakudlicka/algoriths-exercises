const LinkedList = require('./util/linkedList');

function deleteMiddle(node) {
    if (!node || !node.next) {
        throw Error('Incorrect node input. Input a valid middle node');
    }
    const next = node.next;
    node.data = next.data;
    node.next = next.next;
}

const list = new LinkedList();
for (let i = 1; i <= 10; i++) {
    list.insertLast(i);
}
console.log(deleteMiddle(list.head.next));
console.log('List after deletion ', list._toArray());
