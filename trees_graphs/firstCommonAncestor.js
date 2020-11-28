const { BT } = require('./util/BinaryTree');

/**
 *
 * Finds first common ancestor of two nodes by following the chain in which two nodes are on the same side.
 * If both node1 anf node2 are on the left, branch left to look for common ancestor. If they are both on the
 * right, branch right. When node1 and node2 are no longer on the same side, current node must be the common
 * ancestor
 * Time complexity: O(n)
 */
function findFirstCommonAncestor(node, node1, node2) {
	if (!node) return;
	const node1Pos = dfs(node.left, node1) ? 'left': 'right';
	const node2Pos = dfs(node.right, node2) ?  'right' : 'left';
	if (node1Pos !== node2Pos) return node;
	return findFirstCommonAncestor(node[node1Pos], node1, node2);
}

function dfs(rootNode, targetNode) {
	if (!rootNode) return;
	if (rootNode === targetNode) return true;
	return dfs(rootNode.left, targetNode) || dfs(rootNode.right, targetNode);
}

const H = new BT('H');
const G = H.addLeft('G');
const F = G.addLeft('F');
const I = G.addRight('I');
const C = F.addRight('C');
const B = C.addLeft('B');
const D = C.addRight('D');
const A = B.addLeft('A');
const E = D.addRight('E');
const J = H.addRight('J');
const K = J.addLeft('K');
const P = J.addRight('P');
const L = K.addLeft('L');
const M = K.addRight('M');
const R = P.addLeft('R');
const S = P.addRight('S');
const Z = S.addRight('Z');
const T = R.addLeft('T');
const U = T.addLeft('U');
const W = T.addRight('W');
const Y = U.addLeft('Y');


const res = findFirstCommonAncestor(H, B, I);
console.log('res ', res && res.data);

function commonAncestor(node, node1, node2) {
	if (!node) return null;

	const resLeft = commonAncestor(node.left, node1, node2);
	if (resLeft && resLeft !== node1 && resLeft !== node2) return resLeft; // already found ancestor

	const resRight = commonAncestor(node.right, node1, node2);
	if (resRight && resRight !== node1 && resRight !== node2) return resRight; // already found ancestor

	// node1 and node2 found in different subtrees
	if (resLeft && resRight) return node;
	else if (node === node1 || node === node2) {
		return node;
	} else {
		return resLeft ? resLeft : resRight;
	}
}

const res2 = commonAncestor(H, B, I);
console.log('res ', res2.data);
