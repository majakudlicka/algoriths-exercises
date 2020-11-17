const { BST } = require('./util/BinaryTree');

/**
 *
 * Merges two arrays in all possible ways while keeping the elements in each array in the same relative order
 */
function weave(arr1, arr2, weaved = [], results) {

	if (!arr1.length && !arr2.length) {
		results.push(weaved);
		return;
	}
	if (!arr1.length) {
		weaved.push(...arr2);
		results.push(weaved);
		return;
	}
	if (!arr2.length) {
		weaved.push(...arr1);
		results.push(weaved);
		return;
	}

	weave(arr1.slice(1), arr2, [...weaved, arr1[0]], results);
	weave(arr1, arr2.slice(1), [...weaved, arr2[0]], results);
}

/**
 *
 * Returns array of all possible insertion order arrays that could have led to a given binary search tree
 */
function allSequences(node) {
	const result = [];

	if (!node) {
		result.push([]);
		return result;
	}

	const weaved = [node.value];

	const leftSeq = allSequences(node.left);
	const rightSeq = allSequences(node.right);

	leftSeq.forEach(left => {
		rightSeq.forEach(right =>{
			weave(left, right, weaved, result);
		})
	})
	return result;
}

const root = new BST(1);
root.insert(-2);
root.insert(2);
root.insert(0);
root.insert(5);
root.insert(-3);

const res = allSequences(root);

console.log('res ', res);
