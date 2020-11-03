const Graph = require('./util/Graph');
const Queue = require('../stacks_queues/util/queue');

/**
 * One way to check if two nodes are connected is to do a BFS of the graph
 * from the source node. BFS would be useful where the nodes have many out
 * edges (degrees) and paths between pairs are not exceedingly deep as it will
 * visit neighbours from the source node radiating outwards.
 *
 * M = |edges|
 * Time: O(M)
 * Additional space: O(M)
 */
function routeBetween(graph, startNode, targetNode) {
	const queue = new Queue();
	const discovered = new Set();

	queue.add(startNode);
	discovered.add(startNode);
	while (!queue.isEmpty()) {
		const curr = queue.remove();
		if (curr === targetNode) {
			console.log('Path found!');
			return;
		}
		graph.adjacencyList[curr].forEach(el =>  {
			if (!discovered.has(el)) {
				discovered.add(el);
				queue.add(el);
			}
		});
	}
	console.log('No path found');
}

const graph = new Graph();
graph.addVertex('E');
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('S');

graph.addEdge('E', 'A');
graph.addEdge('A', 'C');
graph.addEdge('C', 'A');
graph.addEdge('A', 'B');
graph.addEdge('B', 'G');
graph.addEdge('C', 'D');
graph.addEdge('D', 'G');
graph.addEdge('F', 'B');
graph.addEdge('S', 'F');
graph.addEdge('S', 'G');
graph.addEdge('S', 'D');
graph.addEdge('D', 'S');

// graph.log();

routeBetween(graph, 'E', 'S');
routeBetween(graph, 'B', 'G');
routeBetween(graph, 'A', 'D');
routeBetween(graph, 'S', 'E');
