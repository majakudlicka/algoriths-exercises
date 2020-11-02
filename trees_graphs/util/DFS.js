// "Visited" prop is only useful when running on the graph, is not needed o the tree
function dfs(node, visit) {
	if (!node) return;
	visit(node);
	node.visited = true;
	for (let i = 0; i < node.adjacent; i++) {
		if (!node.adjacent[i].visited) dfs(node);
	}
}
// Tree order traversals
function inOrderTraversal(node, visit) {
	if (!node) return;
	inOrderTraversal(node.left, visit);
	visit(node);
	inOrderTraversal(node.right, visit);
}

function preOrderTraversal(node, visit) {
	if (!node) return;
	visit(node);
	preOrderTraversal(node.left, visit);
	preOrderTraversal(node.right, visit);
}

function postOrderTraversal(node, visit) {
	if (!node) return;
	postOrderTraversal(node.left, visit);
	postOrderTraversal(node.right, visit);
	visit(node);
}

module.exports = { dfs, inOrderTraversal, preOrderTraversal, postOrderTraversal };
