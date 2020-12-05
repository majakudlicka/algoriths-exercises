const { BT } = require('./util/BinaryTree');

/**
 * To find all the paths where node values add up to a given sum we need to
 * travel all paths of the tree and basically look upwards from the current node
 * summing up the values. Where the sum matches the requested sum then increment
 * counter. Even if we match the requested sum or go over we still need to keep
 * going up the path as negative values are also allowed.
 *
 * N = |tree|
 * Time: O(N lg N) - assuming a balanced tree, worst case O(N^2)
 * Additional space: O(lg N) - assuming a balanced tree, worst case O(N)
 */
function countPathsWithSum(node, targetSum, runningSum, pathCount) {
	if (!node) return 0;
	runningSum += node.data;
	const sum = runningSum - targetSum;
	let totalPaths = pathCount[sum] || 0;

	if (runningSum === targetSum) {
		totalPaths++;
	}
	// Increment path count
	if (pathCount[runningSum]) {
		pathCount[runningSum] = pathCount[runningSum] + 1;
	} else {
		pathCount[runningSum] = 1;
	}

	totalPaths += countPathsWithSum(node.left, targetSum, runningSum, pathCount);
	totalPaths += countPathsWithSum(node.right, targetSum, runningSum, pathCount);

	// Decrement path count
	pathCount[runningSum] = pathCount[runningSum] - 1;

	return totalPaths;
}

const tree = new BT(10);
const Five = tree.addLeft(5);
const NegThree = tree.addRight(-3);
NegThree.addRight(11);
const Three = Five.addLeft(3);
const Two = Five.addRight(2);
Two.addRight(1);
Three.addLeft(3);
Three.addRight(-2);

const res = countPathsWithSum(tree, 8, 0, {});

console.log('res ', res);
// console.log('tree ', tree);


