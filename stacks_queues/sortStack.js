const Stack = require('./util/stack');
/**
 * Sort the stack by taking one item off the input stack at a time, find the
 * right place within the processed items in the temp stack to insert it into.
 * Insertion is done by holding the next value aside and moving the temp stack
 * values into the input stack until the right spot is found.
 *
 * N = |stack|
 * Time: O(N^2)
 * Additional space: O(1) - while there are 2 stacks there are only a fixed
 * number of items.
 */
function sortStack(stack) {
	const helperStack = new Stack();

	while (!stack.isEmpty()) {
		let temp = stack.pop();
		if (helperStack.isEmpty()) {
			helperStack.push(stack.pop());
		}
		while (helperStack.peek() > temp) {
			stack.push(helperStack.pop());
		}
		helperStack.push(temp);
	}

	while(!helperStack.isEmpty()) {
		stack.push(helperStack.pop());
	}

	return stack;
}

// Test
const s = new Stack();
s.push(7);
s.push(9);
s.push(1);
s.push(5);

console.log(sortStack(s));

console.log(s.pop());

