


 var visit=[];


var dfs=function(n){
    //console.log(n+'bfs');
    var nodesNumbre=graph.nodes().length;  
    if(nodesNumbre==visit.length){
         return;
    }
    if(!visit.includes(n)) visit.push(parseInt(n));
    
    var voisin=graph.neighbors(parseInt(n));
    
    for(var i=0;i<voisin.length;i++){

        if(visit.includes(voisin[i])==false){           
             dfs(voisin[i]);
        }
    }
    
    var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
    G.addPath(visit);
    jsnx.draw(G, {
        element: '#canvas', 
        withLabels: true, 
        nodeStyle: {
            fill: function(d) { 
                return d.data.color; 
            }
        }, 
        labelStyle: {fill: 'white'},
        stickyDrag: true
    });
   
    
}