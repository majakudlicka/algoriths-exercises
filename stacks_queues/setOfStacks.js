const Stack = require('./util/stack');

/**
 * StackOfStacks uses multiple smaller stacks to hold values. New stacks are
 * created or dropped as required. popAt allows for an item to be popped from
 * any stack.
 *
 * Time: push O(1), pop O(1), popAt O(1)
 * Additional space: push O(1), pop O(1), popAt O(1)
 */
class SetOfStacks extends Stack {
	constructor(limit) {
		super();
		this.limit = limit;
		this.stacks = [];
		const firstStack = new Stack();
		this.stacks.push(firstStack);
	}

	getCurrentStack() {
		return this.stacks[this.stacks.length - 1];
	}

	push(item) {
		if (this.getCurrentStack().size() >= this.limit) {
			this.stacks.push(new Stack());
		}
		this.getCurrentStack().push(item);
	}

	pop() {
		if (!this.getCurrentStack().size()) {
			this.stacks.pop();
		}
		return this.getCurrentStack().pop();
	}

	popAt(stackIndex) {
		if (!this.stacks[stackIndex]) throw new Error('Invalid stack index');
		if (!this.stacks[stackIndex].peek()) throw new Error('Stack at given index has no elements');
		return this.stacks[stackIndex].pop();
	}

	log() {
		console.log('stacks ', this.stacks);
	}

}

// Test
const S = new SetOfStacks(2);

S.push(1);
S.push(2);
S.push(3);
S.push(4);
S.push(5);
S.push(6);

S.log();

S.pop();
S.pop();
S.pop();

S.log();

S.push(4);
S.push(5);
S.push(6);

S.log();

S.popAt(0);
S.popAt(1);
S.popAt(2);

S.log();
