const Stack = require('./util/stack');

/**
 * Queues and Stacks have different orders for extracting items. To create a
 * queue with stacks we have two stacks, one with "new" items and one with "old" ones.
 * When dequeuing an item if the old items stack is empty we
 * use queue operations to pop all the items off the new items stack onto the
 * old items stack which will now be in the right order for a queue.
 *
 * N = |MyQueue|
 * Time: enqueue O(1), dequeue O(N)
 * Additional space: O(N) - to hold the input items
 */
class QueueFromStacks {
	constructor() {
		this.stackNewest = new Stack();
		this.stackOldest = new Stack();
	}

	add(item) {
		this.stackNewest.push(item);
	}

	remove() {
		if (!this.stackOldest.size()) {
			this.shift();
		}
		return this.stackOldest.pop();
	}

	shift() {
		while (!this.stackNewest.isEmpty()) {
			this.stackOldest.push(this.stackNewest.pop());
		}
	}

	peek() {
		if (!this.stackOldest.size()) {
			this.shift();
		}
		return this.stackOldest.peek();
	}

	isEmpty() {
		return this.stackNewest.isEmpty() && this.stackOldest.isEmpty();
	}

	log() {
		console.log('stackNew ', this.stackNewest);
		console.log('stackOld ', this.stackOldest);
	}
}

const QS = new QueueFromStacks();

QS.add(1);
QS.add(2);
QS.add(3);
QS.add(4);
QS.add(5);

QS.remove();
QS.remove()

QS.log();

console.log(QS.peek());
console.log(QS.isEmpty());
