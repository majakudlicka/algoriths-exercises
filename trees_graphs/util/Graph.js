class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}
	addEdge(source, destination) {
		if (!this.adjacencyList[source]) {
			this.addVertex(source);
		}
		this.adjacencyList[source].push(destination);
	}
	removeEdge(source, destination) {
		this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
	}
	removeVertex(vertex) {
		while (this.adjacencyList[vertex]) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}

	log() {
		console.log(this.adjacencyList);
	}
}

module.exports = Graph;
