// VERTEX = a node
// EDGE = connection between nodes
// UNDIRECTED GRAPH = no direction associated with the edge
// DIRECTED GRAPH = direction is assigned to an edge
// WEIGHTED GRAPH = edges have values assigned to them

// ADJACENCY MATRIX vs. ADJACENCY LIST

// minimal logic, avoiding error handling etc.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        // if we wanted to make a directed graph, we would only do one direction, not both
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacenctVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacenctVertex);
        }

        // may not do this in the real application of a graph
        delete this.adjacencyList[vertex];
    }
}
