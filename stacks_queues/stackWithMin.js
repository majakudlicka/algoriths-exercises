const Stack = require('./util/stack');

class NodeWithMin {
	constructor(data, prevMin) {
		this.data = data;
		this.min = prevMin !== undefined ? Math.min(data, prevMin) : data;
	}
}
/**
 * StackWithMin maintains a current stack minimum by putting an object on the stack
 * that holds the value and the minimum at that time (min of the substack) rather than just the value.
 *
 * Time: push O(1), pop O(1), peek O(1), min O(1)
 * Additional space: push O(N), pop O(1), peek O(1), min O(1)
 * Additional space required in push to create wrapping object to hold min at
 * that point.
 */
class StackWithMin extends Stack {
	constructor() {
		super();
	}

	push(data) {
		let prevMin;
		const prevNode = this.peek();
		if (prevNode) prevMin = prevNode.min;
		const node = new NodeWithMin(data,prevMin);
		return this.items.push(node);
	}

	min() {
		return this.peek().min;
	}
}

const SM = new StackWithMin();

SM.push(5);
SM.push(-1);
SM.push(9);
SM.push(-10);
SM.push(-5);
SM.push(-20);

// -20
console.log(SM.min());
SM.pop();
// -10
console.log(SM.min());
SM.pop();
SM.pop()
// -1
console.log(SM.min());

// To save space, rather than keeping a min in each node, we could create a separate stack of min

class MinStack extends Stack {
	constructor(props) {
		super(props);
		this.minStack = new Stack();
	}

	push(item) {
		const currentMin = this.minStack.peek();
		if (!currentMin || currentMin >= item) {
			this.minStack.push(item);
		}
		return Stack.prototype.push.call(this, item);
	}

	pop() {
		const currentMin = this.minStack.peek();
		const currentItem = Stack.prototype.peek.call(this);
		if (currentMin !== undefined && currentMin === currentItem) {
			this.minStack.pop();
		}
		return Stack.prototype.pop.call(this);
	}

	min() {
		return this.minStack.peek();
	}

}

const MS = new MinStack();

MS.push(5);
MS.push(-1);
MS.push(9);
MS.push(-10);
MS.push(-5);
MS.push(-20);

// -20
console.log(MS.min());
MS.pop();
// -10
console.log(MS.min());
MS.pop();
MS.pop()
// -1
console.log(MS.min());
