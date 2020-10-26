class TripleStack {
	constructor() {
		this.items = [];
		this.startOf1stStack = 0;
		this.startOf2ndStack = 0;
		this.startOf3rdStack = 0;
	}

	push(stackNum, item) {
		if (stackNum === 1) {
			this.items.splice(this.startOf2ndStack, 0, item);
			this.startOf2ndStack++;
			this.startOf3rdStack++;
		} else if (stackNum === 2) {
			this.items.splice(this.startOf3rdStack, 0, item);
			this.startOf3rdStack++;
		} else if (stackNum === 3) {
			this.items.push(item);
		} else {
			throw new Error('Stack number of of range');
		}
	}

	pop(stackNum) {
		if (stackNum === 1 && !this.isEmpty(1)) {
			const removedElements = this.items.splice(this.startOf2ndStack - 1, 1);
			this.startOf2ndStack--;
			this.startOf3rdStack--;
			return removedElements[0];
		} else if (stackNum === 2 && !this.isEmpty(2)) {
			const removedElements = this.items.splice(this.startOf3rdStack - 1, 1);
			this.startOf3rdStack--;
			return removedElements[0];
		} else if (stackNum === 3 && !this.isEmpty(3)) {
			return this.items.pop();
		} else if (![1,2,3].includes(stackNum)) {
			throw new Error('Stack number out of range');
		} else {
			throw new Error('Element does not exist');
		}
	}

	peek(stackNum) {
		if (stackNum === 1 && !this.isEmpty(1)) {
			return this.items[this.startOf2ndStack - 1];
		} else if (stackNum === 2 && !this.isEmpty(2)) {
			return this.items[this.startOf3rdStack - 1];
		} else if (stackNum === 3 && !this.isEmpty(3)) {
			return this.items[this.items.length - 1];
		} else if (![1,2,3].includes(stackNum)) {
			throw new Error('Stack number out of range');
		} else {
			throw new Error('Element does not exist');
		}
	}

	isEmpty(stackNum) {
		if (stackNum === 1) {
			return this.startOf2ndStack - this.startOf1stStack === 0;
		} else if (stackNum === 2) {
			return this.startOf3rdStack - this.startOf2ndStack === 0;
		} else if (stackNum === 3) {
			return this.items.length - this.startOf3rdStack < 1;
		} else {
			throw new Error('Stack number out of range');
		}
	}

}

const TS = new TripleStack();

TS.push(1, '1a');
TS.push(1, '1b');
TS.push(1, '1c');

TS.push(2, '2a');
TS.push(2, '2b');
TS.push(2, '2c');

TS.push(3, '3a');
TS.push(3, '3b');
TS.push(3, '3c');

const peek1 = TS.peek(1);
const peek2 = TS.peek(2);
const peek3 = TS.peek(3);

const c1 = TS.pop(1);
const c2 = TS.pop(2);
const c3 = TS.pop(3);

console.log({ peek1, peek2, peek3 });
console.log({ c1, c2, c3 });

const b1 = TS.pop(1);
const b2 = TS.pop(2);
const b3 = TS.pop(3);

let isEmpty1 = TS.isEmpty(1);
let isEmpty2 = TS.isEmpty(2);
let isEmpty3 = TS.isEmpty(3);

console.log({ b1, b2, b3 });
console.log({ isEmpty1, isEmpty2, isEmpty3 });

const a1 = TS.pop(1);
const a2 = TS.pop(2);
const a3 = TS.pop(3);

isEmpty1 = TS.isEmpty(1);
isEmpty2 = TS.isEmpty(2);
isEmpty3 = TS.isEmpty(3);

console.log({ a1, a2, a3 });
console.log({ isEmpty1, isEmpty2, isEmpty3 });
