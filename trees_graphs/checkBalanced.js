const { BST } = require('./util/BinaryTree');

/**
 * This function attempts to check if the tree is balanced
 * A balanced tree is defined to be a tree such that the heights
 * of any node never differ by more than one
 *
 * N = number of nodes
 * Time: O(N)
 * Additional space: O(H), where H is the height of the tree
 */
function checkBalanced(node) {
	let leftSubTreeHeight = 0;
	let rightSubTreeHeight = 0;
	let isBalanced = true;
	if (node.left) {
		let res = checkBalanced(node.left);
		if (res.isBalanced === false) isBalanced = false;
		leftSubTreeHeight = res.treeHeight;
	}

	if (node.right) {
		let res = checkBalanced(node.right);
		if (res.isBalanced === false) isBalanced = false;
		rightSubTreeHeight = res.treeHeight;
	}

	if (Math.abs(leftSubTreeHeight - rightSubTreeHeight) >= 2) {
		isBalanced = false;
	}
	const currentTreeHeight = 1 + Math.max(leftSubTreeHeight, rightSubTreeHeight);

	return { isBalanced, treeHeight: currentTreeHeight }
}

// Same approach, slightly more compact execution - return Number.MIN_SAFE_INTEGER for errors
function checkBalanced2(root) {
	return checkHeight(root) !== Number.MIN_SAFE_INTEGER;
}

function checkHeight(node) {
	if (!node) return 0;

	const leftSubTreeHeight = checkHeight(node.left);
	if (leftSubTreeHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;

	const rightSubTreeHeight = checkHeight(node.right);
	if (rightSubTreeHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;


	if (Math.abs(leftSubTreeHeight - rightSubTreeHeight) > 1) {
		return Number.MIN_SAFE_INTEGER;
	}

	return 1 + Math.max(leftSubTreeHeight, rightSubTreeHeight);
}

const unbalanced = new BST(5);
unbalanced.insert(3);
unbalanced.insert(6);
unbalanced.insert(2);
unbalanced.insert(4);
unbalanced.insert(7);
unbalanced.insert(1);
unbalanced.insert(8);

// console.log('tree ', unbalanced);

console.log(checkBalanced(unbalanced));
console.log(checkBalanced2(unbalanced));

const balanced = new BST(5);
balanced.insert(3);
balanced.insert(7);
balanced.insert(2);
balanced.insert(4);
balanced.insert(6);
balanced.insert(8);
balanced.insert(1);
balanced.insert(9);

// console.log('tree ', balanced);

console.log(checkBalanced(balanced));
console.log(checkBalanced2(balanced));
