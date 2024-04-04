/**
 * @param {number[][]} edges
 * @param {number} signalSpeed
 * @return {number[]}
 */
var countPairsOfConnectableServers = function(edges, signalSpeed) {
    let n = edges.length;
    //construct the graph
    let graph = new Array(n+1).fill().map(()=>{
        return [];
    });
    for(let edge of edges){
        graph[edge[0]].push([edge[1],edge[2]]);
        graph[edge[1]].push([edge[0],edge[2]]);
    }
};


let edges = [[0,1,1],[1,2,5],[2,3,13],[3,4,9],[4,5,2]], signalSpeed = 1;
console.log(countPairsOfConnectableServers(edges,signalSpeed));
