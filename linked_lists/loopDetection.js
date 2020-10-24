const LinkedList = require('./util/linkedList');

/**
 * This algorithm uses the runners principle where we have a slow and fast (2x)
 * runners that both traverse the list. If at some point both runners point to
 * the same node then there is a cycle. Due to the different rate at which they
 * travel they will meet k steps 'before' the start of the cycle so if you reset
 * the slow runner back to the start and leave the faster runner at the meeting
 * point, when they start moving forward again they will eventually meet at the
 * start of the cycle.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
function loopDetection(list) {
	let slow = list.head;
	let fast = list.head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) break;
	}

	if (!fast || !fast.next) return null;

	slow = list.head;
	while (slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
}

const list1 = new LinkedList();
for (let elem of [1,2,3,4,5,6,7,8,9]) {
	list1.insertLast(elem);
}
// Create a loop
list1.head.next.next.next.next.next.next.next.next = list1.head.next.next.next.next; // 5
// True, returns node 5
console.log(loopDetection(list1));

const list2 = new LinkedList();
for (let elem of [1,2,3,4,5,6,7,8,9]) {
	list2.insertLast(elem);
}
// False, returns null
console.log(loopDetection(list2));

// Alternative approaches:
// - use Set
// - add prop such as "visited" to each node
