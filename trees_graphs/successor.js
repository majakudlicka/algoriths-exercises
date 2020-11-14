class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left === null) {
				this.left = new BST(value);
				this.left.parent = this;
				return this.left;
			} else {
				return this.left.insert(value);
			}
		} else {
			if (this.right === null) {
				this.right = new BST(value);
				this.right.parent = this;
				return this.right;
			} else {
				return this.right.insert(value);
			}
		}
	}
}
/**
 * Finding the successor as a few different scenarios:
 *   1. Where a right child exists:
 *     a. If it has no left child then it is the successor.
 *     b. If it has a left child then keep following left child pointers until
 *     you've got the left most child, this is the successor.
 *   2. Where no right child exists:
 *     a. If this node is a left child then the successor is its parent.
 *     b. Otherwise follow parent pointers until we find a node that has
 *     a greater value of current node, then the parent is the successor.
 *
 * N = |tree|
 * Time: O(lg N) - assumes balanced tree, worst cast O(N)
 * Additional space: O(1)
 */
function successor(node) {
	if (!node) return null;
	if (node.right) return findMostLeft(node.right);
	// current node is the left child of its parent
	if (node.parent && node.parent.left === node) {
		return node.parent;
		// current node is the right child of its parent
	} else if (node.parent && node.parent.right === node) {
		return findLargerParent(node.parent, node.value);
	}
	return null;
}

function findMostLeft(node) {
	while (node && node.left) {
		node = node.left;
	}
	return node;
}
// That also means that we're traversing up until we're on the left rather than right
function findLargerParent(node, value) {
	while (node && node.value < value) {
		node = node.parent;
	}
	return node;
}

const bst = new BST(4);
bst.insert(1);
bst.insert(7);
bst.insert(0)
bst.insert(2);
bst.insert(5);
bst.insert(9);
const negOne = bst.insert(-1);
bst.insert(0.5);
bst.insert(1.5);
bst.insert(3)
bst.insert(6);
bst.insert(8);

let next = successor(negOne);
console.log(next.value);
getNext(next);

function getNext(node) {
	while (successor(node)) {
		node = successor(node);
		console.log(node && node.value);
	}
}

