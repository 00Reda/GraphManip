
var visite_bfs=[];
var f=[];
var bfs=function(n){
    visite_bfs=[];
    f.push(parseInt(n));
    visite_bfs.push(parseInt(n));

    while(f.length!=0){
        var a=f.shift();
        if(!visite_bfs.includes(a))  visite_bfs.push(a);
       
        var v=graph.neighbors(parseInt(a));
        for(var i=0;i<v.length;i++){
            if(!visite_bfs.includes(v[i])){
                visite_bfs.push(v[i]);
                f.push(v[i]);
            }    
        }
        if(visite_bfs.length==graph.length) break;
    }

    var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
    G.addPath(visite_bfs);
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