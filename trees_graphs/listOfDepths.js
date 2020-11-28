const { BST } = require('./util/BinaryTree');
const LinkedList = require('../linked_lists/util/linkedList');
const Queue = require('../stacks_queues/util/queue');

/**
 * Travels through tree and adds values into a list of linked lists. Each level
 * of tree is represented in a linked list.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(N)
 */
function listTreeByDepthOrder(tree) {
	const lists = [];
	listDepthsDfs(lists, tree, 0);
	return lists;
}

function listDepthsDfs(lists, node, level) {
	if (!node) return;
	if (!lists[level]) lists.push(new LinkedList({ data: node.value }));
	else lists[level].insertLast(node.value);
	listDepthsDfs(lists, node.left, level + 1);
	listDepthsDfs(lists, node.right, level + 1);
}

// Uses BFS and utilises Linked List as a queue for each level
function createLevelLinkedList(root) {
	const result = [];
	let current = new LinkedList();
	let parent;
	if (root) {
		current.insertLast(root);
	}
	while (current.size()) {
		result.push(current);
		parent = current.head;
		current = new LinkedList();
		while (parent) {
			if (parent.data && parent.data.left) {
				current.insertLast(parent.data.left);
			}
			if (parent.data && parent.data.right) {
				current.insertLast(parent.data.right);
			}
			parent = parent.next;
		}

	}
	return result;
}

// Using BFS, Queue and level property
function listDepths(root) {
	const queue = new Queue();
	root.level = 0
	queue.add(root);
	const lists = [];
	while (!queue.isEmpty()) {
		const curr = queue.remove();
		if (!lists[curr.level]) {
			lists.push(new LinkedList({ data: curr.value, level: curr.level }));
		} else {
			lists[lists.length - 1].insertLast(curr.value);
		}
		if (curr.left) {
			curr.left.level = curr.level + 1;
			queue.add(curr.left);
		}
		if (curr.right) {
			curr.right.level = curr.level + 1;
			queue.add(curr.right);
		}
	}
	return lists;
}


// 4 levels
const root = new Tree(25);
root.insert(15);
root.insert(50);
root.insert(10);
root.insert(22);
root.insert(35);
root.insert(70);
root.insert(4);
root.insert(12);
root.insert(18);
root.insert(31);
root.insert(44);
root.insert(66);


// console.log('tree ', tree);

console.log(listDepths(root));
console.log(listTreeByDepthOrder(root));

console.log(createLevelLinkedList(root));
