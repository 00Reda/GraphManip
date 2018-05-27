/**
 * @see https://medium.com/jeremy-keeshin/hello-world-for-javascript-with-npm-modules-in-the-browser-6020f82d1072
   @see https://github.com/prabod/Graph-Theory-Ford-Fulkerson-Maximum-Flow
 */

 window.fordFulkerson=function (graph , s , p) {
    var fordFulkerson = require('graph-theory-ford-fulkerson');
    return fordFulkerson(graph, s, p); 
}


 

    