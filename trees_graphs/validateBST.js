const BST = require('./util/BST');

class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
/**
 * Checks whether Binary Tree is a valid Binary Search Tree. Duplicate values
 * must be stored on the left side
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(lg N) - due to recursion. Assumes a balanced tree, worst
 * case is O(N)
 */
function validateBST(node) {
	if (!node) return { max: Number.MIN_SAFE_INTEGER, min: Number.MAX_SAFE_INTEGER, isValid: true };

	let isValid = true;
	const resLeft = validateBST(node.left);
	if (resLeft.isValid === false) isValid = false;
	const minLeft = resLeft.min;
	const maxLeft = resLeft.max;

	const resRight = validateBST(node.right);
	if (resRight.isValid === false) isValid = false;
	const minRight = resRight.min;
	const maxRight = resRight.max;

	const newMin = Math.min(minLeft, minRight, node.value);
	const newMax = Math.max(maxLeft, maxRight, node.value);

	if (node.value < maxLeft || node.value >= minRight) {
		isValid = false;

	}

	return { isValid, min: newMin, max: newMax };
}


const bst = new BST(4);
bst.insert(1);
bst.insert(7);
bst.insert(9);
bst.insert(2);
bst.insert(5);

// console.log('bst ', bst);

// console.log(validateBST(bst));

const regularBt = new BinaryTree(4);
regularBt.right = new BinaryTree(7);
regularBt.left = new BinaryTree(1);
regularBt.right.right = new BinaryTree(9);
regularBt.right.left = new BinaryTree(5);
regularBt.left.left = new BinaryTree(2);

console.log(validateBST(regularBt));
