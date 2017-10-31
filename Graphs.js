function Graph(){
    this.vertices = [];
    this.adjacencyList = {};
}

Graph.prototype.addVertex = function(vertex) {
  this.vertices.push(vertex);
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.breadthFirstSearch = function(start){
    // Create an empty queue
    var queue = [start];
    var result = [];
    var visited = {};
    var currentVertex;


    visited[start] = true;

    while (queue.length) {
       currentVertex = queue.shift();
       result.push(currentVertex);

       this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
       });
    }
    return result
}


var graph = new Graph;
graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S','P');
graph.addEdge('S','U');

graph.addEdge('P','X');
graph.addEdge('U','X');

graph.addEdge('P','Q');
graph.addEdge('U','V');

graph.addEdge('X','Q');
graph.addEdge('X','Y');
graph.addEdge('X','V');

graph.addEdge('Q','R');
graph.addEdge('Y','R');

graph.addEdge('Y','W');
graph.addEdge('V','W');

graph.addEdge('R','T');
graph.addEdge('W','T');

console.log(
graph.breadthFirstSearch('S') // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]
)