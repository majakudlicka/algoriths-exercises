class Node {
	constructor(data) {
		this.data = data;
	}
}
// Queue is better implemented as a linked list than as an array because adding elements to the beginning of array
// causes reindexing and is expensive

// First comes first, last is last
class Queue {
	constructor(el = null) {
		this.first = el;
		this.last = el;
	}

	peek() {
		return this.first.data;
	}

	add(el) {
		const node = new Node(el);
		if (this.isEmpty()) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
	}

	remove() {
		if (this.isEmpty()) throw new Error('No such element');
		let temp = this.first;
		this.first = this.first.next;
		if (this.first === null) this.last = null;
		return temp.data;
	}

	isEmpty() {
		return this.first === null;
	}
}

module.exports = Queue;
