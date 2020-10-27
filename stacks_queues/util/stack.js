// It is ok to implement stack as an array under the hood because push and pop elements do not require reindexing
// Therefore we'll get O(1) execution time
class Stack {
	constructor() {
		this.items = [];
	}

	peek() {
		return this.items[this.items.length -1];
	}

	pop() {
		if (this.isEmpty()) return "Underflow";
		return this.items.pop();
	}

	push(item) {
		return this.items.push(item);
	}

	isEmpty() {
		return this.items.length === 0;
	}

	printStack() {
		let str = "";
		for (let i = 0; i < this.items.length; i++)
			str += this.items[i] + " ";
		return str;
	}

	size() {
		return this.items.length;
	}
}

module.exports = Stack;

