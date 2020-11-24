const { BT } = require('./util/BinaryTree');

/**
 * To check if tree2 is a subtree of tree1 this algorithm basically searches
 * through tree1 looking for a potential root nodes (nodes whose values match
 * the root node of tree2). Once found go through node for node comparing from
 * that found root down to the nodes in tree2. If they all match then tree2 is
 * a subtree.
 *
 * N = |tree1|
 * M = |tree2|
 * k = number of occurences of of root of tree2 in tree1
 * Time: O(N +kM)
 * Additional space: O(lg N + log M) - space cost is due to recursive nature of algorithm
 * and assumes a balanced tree, worst case is O(N + M)
 */
function searchSubtree(tree1, tree2) {
	if (!tree1 || !tree2) return null;
	const potentialCandidates = dfs(tree1, tree2.data);
	let isSame = false;
	let res = null;
	for (let i = 0; i < potentialCandidates.length; i++) {
		isSame = doubleDfs(potentialCandidates[i], tree2);
		if (isSame) {
			res = potentialCandidates[i];
			break;
		}
	}
	return res;
}

function dfs(root, searchVal, res = []) {
	if (!root) return;
	if (root.data === searchVal) res.push(root);
	dfs(root.left, searchVal, res);
	dfs(root.right, searchVal, res);
	return res;
}

function doubleDfs(tree1, tree2) {
	if (tree1 === null && tree2 === null) return true;
	// Check if one is null and one is not null
	if (!tree1 ^ !tree2) return false;
	if (tree1.data !== tree2.data) return false;
	return doubleDfs(tree1.left, tree2.left) && doubleDfs(tree1.right, tree2.right);
}

const root = new BT(1);
const Two = root.addLeft(2);
const Seven = root.addRight(7);
const Three = Two.addLeft(3);
const Four = Two.addRight(5);
Three.addLeft(6);
Three.addRight(5);
Four.addLeft(5);
Four.addRight(5);
const Eight = Seven.addRight(8);
Eight.addLeft(9);
const Ten = Eight.addRight(10);
Ten.addLeft(13);
Ten.addRight(14);
Ten.right.addRight(15);

const root2 = new BT(8);
root2.addLeft(9);
const Ten2 = root2.addRight(10);
Ten2.addLeft(13);
Ten2.addRight(14);
Ten2.right.addRight(15);

const res = searchSubtree(root, root2);
console.log('res ', res);
