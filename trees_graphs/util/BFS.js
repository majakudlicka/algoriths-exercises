const Queue = require('../../stacks_queues/util/queue');

// "Marked" prop is only useful when running on the graph, is not needed o the tree
function bfs(node, visit = console.log) {
	const queue = new Queue();
	node.marked = true;
	queue.add(node);
	while (!queue.isEmpty()) {
		const curr = queue.remove();
		visit(curr);
		curr.adjacent.forEach(el =>  {
			if (!el.marked) {
				el.marked = true;
				queue.add(el);
			}
		});
	}
}

module.exports = bfs;
