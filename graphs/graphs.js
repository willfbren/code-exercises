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
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacenctVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacenctVertex);
        }

        // may not do this in the real application of a graph
        delete this.adjacencyList[vertex];
    }

    dfsRecursive(start) {
        const result = [];
        const visited = {};
        // preserve this keyword, because this changes in helper function
        const adjacencyList = this.adjacencyList;

        // helper function
        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

    // will return slightly different order than dfs recursive
    dfsIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
