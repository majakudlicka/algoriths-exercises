const LinkedList = require('./util/linkedList');

function kthToLast(list, k) {
    let counter = 0;
    let runner = list.head;
    let node = list.head;
    while (counter < k) {
        if (!runner || !runner.next) {
            throw Error('Index k outside of range of the Linked List');
        }
        runner = runner.next;
        counter++;
    }
    while (runner.next) {
        runner = runner.next;
        node = node.next;
    }
    return node;
}

const list = new LinkedList();
for (let i = 1; i <= 10; i++) {
    list.insertLast(i);
}

console.log('list before ',list._toArray());
console.log('Kth to last is ', kthToLast(list,0));
console.log('Kth to last is ', kthToLast(list,1));
console.log('Kth to last is ', kthToLast(list,5));
