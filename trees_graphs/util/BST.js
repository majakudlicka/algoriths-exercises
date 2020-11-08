const Queue = require('../../stacks_queues/util/queue');

class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		if (value < this.value) {
			if (this.left === null) {
				this.left = new BST(value);
			} else {
				this.left.insert(value);
			}
		} else {
			if (this.right === null) {
				this.right = new BST(value);
			} else {
				this.right.insert(value);
			}
		}
	}
}

// BST.prototype.printLevelOrder = function() {
// 	var level = [];
// 	var q = new Queue();
// 	var nextq = new Queue();
// 	var currNode;
//
// 	q.add(this);
// 	while (!q.isEmpty()) {
// 		currNode = q.remove();
// 		level.push(currNode.value);
// 		if (currNode.left !== null) {
// 			nextq.add(currNode.left);
// 		}
// 		if (currNode.right !== null) {
// 			nextq.add(currNode.right);
// 		}
// 		if (q.isEmpty()) {
// 			console.log(level.join(','));
// 			level = [];
// 			q = nextq;
// 			nextq = new Queue();
// 		}
// 	}
// };

module.exports = BST;
