class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertFirst(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        return node;
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        let prev = null;
        while (node) {
            node = node.next;
            prev = node;
        }
        return prev;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        let node = this.head;
        let prev = node;
        while (node.next) {
            node = node.next;
            prev = node;
        }
        prev.next = null;
    }

    insertLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) return node;
            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) return;
        if (index === 0) {
            this.head = null;
            return;
        }
        let prev = this.getAt(index -1);
        if (!prev || !prev.next) return;
        prev.next = prev.next.next;

    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1);
        prev.next = new Node(data, prev.next);
    }

    _toArray() {
        let arr = [];
        let cur = this.head;
        while (cur) {
            arr.push(cur.data);
            cur = cur.next;
        }

        return arr;
    }
}

module.exports = LinkedList;
