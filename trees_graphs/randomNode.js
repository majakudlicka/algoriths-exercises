/**
 * Returns a random integer between the specified values.
 * The value is no lower than min (or the next integer greater than min if min isn't an integer),
 * and is less than (but not equal to) max
 */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
/**
 * RandomNode routine first gets a random number between 1 and the number of
 * elements in the tree. Every node in the tree keeps track of the size of the
 * subtree that is it a part of (number of nodes in left and right subtrees
 * as well as itself). Using these counts we can go through the tree and find
 * the node whose index would match that random number if the trees values
 * where considered in order.
 *
 * If the random number is:
 *   1. smaller than the nodes left subtree size then go left.
 *   2. equal to the left subtree size + 1 then return current node.
 *   3. otherwise go right and subtract (the left subtree size + 1)  from the random
 *   	number as we have already skipped over that many values.
 *
 * N = |tree|
 * Time: randomNode O(lg N) - this assumes a balanced tree, otherwise would be O(N) in the worst case
 * Additional space: insert O(N) - to hold values and keep track of subtree sizes
 */
class BST {
	constructor(data) {
		this.data = data;
		this.left  = null;
		this.right = null;
		this.size = 1;
	}

	insert(data) {
		this.size++;
		if (data > this.data) {
			if (!this.right) {
				this.right = new BST(data);
				return;
			}
			this.right.insert(data);
		} else {
			if (!this.left) {
				this.left = new BST(data);
				return;
			}
			this.left.insert(data);
		}
	}

	find(data, parent = null, direction) {
		if (data === this.data) return { node: this, parent: parent, direction };
		if (data > this.data) {
			return this.right.find(data, this, 'right');
		} else {
			return this.left.find(data, this, 'left');
		}
	}

	delete(data) {
		return this.deleteNode(this, data)
	}

	deleteNode(node, data) {
		if (!node) return node;
		node.size--;

		if (data < node.data) {
			node.left = this.deleteNode(node.left, data);
		}

		else if (data > node.data) {
			node.right = this.deleteNode(node.right, data);
		}

		// If data is same as node's data, then this is the node to be deleted
		else {

			// Node with only one child or no child
			if (!node.left) {
				let temp = node.right;
				node = null;
				return temp;
			} else if (!node.right) {
				let temp = node.left;
				node = null;
				return temp;
			}

			// Node with two children: get the inorder successor (smallest in the right subtree)
			let temp = this.findLeftChildMostNode(node.right);

			// Copy the inorder successor's content to this node
			node.data = temp.data;

			// Delete the inorder successor
			node.right = this.deleteNode(node.right, temp.data);

		}

		return node;
	}

	// Find next node in in-order-traversal
	findLeftChildMostNode(node) {
		while (node && node.left) {
			node = node.left;
		}
		return node;
	}

	findRightChildMostNode(node) {
		while (node && node.right) {
			node = node.right;
		}
		return node;
	}

	getRandomNode(random) {
		if (!random) random = getRandomInt(1, this.size + 1);
		let sizeOfLeft = this.left && this.left.size || 0;
		if (random <= sizeOfLeft) {
			return this.left.getRandomNode(random);
		} else if (random === sizeOfLeft + 1) {
			return this;
		} else {
			return this.right.getRandomNode(random - sizeOfLeft - 1);
		}
	}

}

const tree = new BST(9);
tree.insert(5);
tree.insert(16);
tree.insert(3);
tree.insert(7);
tree.insert(14);
tree.insert(18);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.insert(15);
tree.insert(1);

// console.log(tree);

// const ran = tree.getRandomNode();
// console.log('ran ', ran && ran.data);

const res = tree.delete(5);
console.log('res ', res);
