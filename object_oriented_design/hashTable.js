class HashTable {
	constructor() {
		this.hash = {};
	}

	addValue(value) {
		const key = this.calculateHash(value.key);
		if (!this.hash[key]) this.hash[key] = new HashEntry(value);
		else this.hash[key].appendValue(value);
	}

	retrieveValue(key) {
		const hashKey = this.calculateHash(key);
		return this.hash[hashKey].getValue(key);
	}

	calculateHash(key) {
		// Calculates hash based on valueName
	}

	removeValue(key) {
		const hashKey = this.calculateHash(key);
		return this.hash[hashKey].removeValue(key);
	}
}

class HashEntry {
	constructor(value) {
		this.head = new Node(value);
	}

	appendValue(value) {
		let node = this.head;
		while (node && node.next) {
			node = node.next;
		}
		node.next = new Node(value);
	}

	getValue(key) {
		// Iterates over linked list until finding node by its key
	}

	removeValue(key) {
		// Finds Node by value key and removes it by pointing this.next of previous
		// node to the next
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
