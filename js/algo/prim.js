

var Prim=function(n){
    //console.log(n+' : prim');
     n=parseInt(n);
    var T=[];
    /**
     *  arcs a dessiner
     */
    var arcs=[];
    var nodeToAdd=null;
    var parentNode=null;
    var coutTotal=0;
    var min=99999;

    T.push(n);
    var m=getMatrix();
    while(T.length!=graph.nodes().length){
        min=99999;
        nodeToAdd=null;
        parentNode=null;
        
        for (var i = 0; i < T.length; i++) {
            
             var elm=T[i];
             var vs=graph.neighbors(elm);
             for (var j = 0; j < vs.length; j++) {
                 var voisin=vs[j];

                 if(T.includes(voisin)) continue ;

                 var a=m[elm-1][voisin-1];

                 if(a!=0 && min>a){
                     min=a;
                     nodeToAdd=voisin;
                     parentNode=elm;
                 }
             }  
            
        }
        if(nodeToAdd!=null && parentNode!=null){
            T.push(nodeToAdd);
            arcs.push([parentNode,nodeToAdd]);
            coutTotal+=min;
        }
       

    }
    
    var model= document.getElementById("modal-body");
    var html='<ul class="list-group">';
     html+='<li class="list-group-item"> AMC du graph : ' +coutTotal+'</li>';
    html+="</ul>";
    model.innerHTML=html;
    $("#warshallModel").modal();

    $("#warshallModel").modal();
    var g = new jsnx.Graph();
    g.addEdgesFrom(arcs);
                jsnx.draw(g, {
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