const states = { BLANK: 'blank', VISITING: 'visiting', VISITED: 'visited' }

class Node {
	constructor(val) {
		this.value = val;
		this.state = states.BLANK;
		this.adjacent = [];
	}
}

const C = new Node('c');
const D = new Node('d');
const A = new Node('a');
const B = new Node('b');
const E = new Node('e');
const F = new Node('f');
const G = new Node('g');
const H = new Node('h');

A.adjacent.push(E);
B.adjacent.push(A, H, E);
C.adjacent.push(A);
D.adjacent.push(G);
F.adjacent.push(C, A, B);

const graph = { nodes: [A, B, C, D, E, F, G, H] }
/**
 * To get the order of the projects we just need to create a graph of the
 * projects and their dependencies and do a topological sort. To detect if an
 * order can be determined we also need to check for cycles as topological sort
 * will only work on DAGs.
 *
 * N = |projects|
 * M = |dependencies|
 * Time: O(N+M) - this assumes that the objects and we use as hashmaps and the
 * Set data type have operations that take O(1) time.
 * Additional space: O(N)
 */
function findBuildOrder2(graph) {
	const order = [];
	graph.nodes.forEach(node => {
		if (node.state === states.BLANK) doDFS(node, order);
	});
	return order.map(node => node.value);
}

function doDFS(vertex, order) {
	if (vertex.state === states.VISITING) throw new Error('Cycle');

	if (vertex.state === states.BLANK) {
		vertex.state = states.VISITING;
		vertex.adjacent.forEach(child => {
			doDFS(child, order);
		});
		vertex.state = states.VISITED;
		order.push(vertex);
	}
}
// last go first
const res = findBuildOrder2(graph);
console.log(res.reverse());

class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set();
		}
	}
	addEdge(source, destination) {
		if (!this.adjacencyList[source]) {
			this.addVertex(source);
		}
		this.adjacencyList[source].add(destination);
	}
	removeEdge(source, destination) {
		this.adjacencyList[source].delete(destination);
	}
	removeVertex(vertex) {
		Object.keys(this.adjacencyList).forEach(key => {
			this.removeEdge(key, vertex);
		})
		delete this.adjacencyList[vertex];
	}
}

function findBuildOrder(graph) {
	const buildOrder = [];
	let verticesWithNoDeps = findEdgesWithNoDeps(graph);

	while (verticesWithNoDeps.length) {
		buildOrder.push(...verticesWithNoDeps);
		removeVertices(graph, verticesWithNoDeps);
		verticesWithNoDeps = findEdgesWithNoDeps(graph);
	}
	if (Object.keys(graph.adjacencyList).length === 0) {
		return buildOrder;
	} else {
		return new Error('Built not possible');
	}
}

function findEdgesWithNoDeps(graph) {
	return Object.entries(graph.adjacencyList).filter(entry => {
		return entry[1].size === 0;
	}).map(entry=> entry[0]);
}

function removeVertices(graph, vertices) {
	vertices.forEach(v => {
		graph.removeVertex(v);
	})
}

const graph1 = new Graph();
graph1.addVertex('a');
graph1.addVertex('d');
graph1.addVertex('b');
graph1.addVertex('f');
graph1.addVertex('c');
graph1.addVertex('e');

graph1.addEdge('d', 'a');
graph1.addEdge('a', 'f');
graph1.addEdge('b', 'f');
graph1.addEdge('c', 'd');
graph1.addEdge('d', 'b');

const order = findBuildOrder(graph1);
console.log('order ', order);
