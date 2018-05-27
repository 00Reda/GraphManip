
var ActiveBtn=document.getElementById("warshall");
var graphT=null;

if(ActiveBtn!=null){

    ActiveBtn.addEventListener("click",function(e){
   
  
                e.preventDefault();
                console.log(graph);
                graphT= wharshall();
              
                $("#warshallModel").modal();
  
                jsnx.draw(graphT, {
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
  
  
    });
  
  
  }

var fromMatrixToGraph=function (){

    var orieante = localStorage.getItem("oriente");
    var graph =null;
    if(orieante=="1")
    graph = new jsnx.DiGraph();
    else 
    graph = new jsnx.Graph();

    var rows=parseInt(localStorage.getItem("rows"));
    var cols=parseInt(localStorage.getItem("cols"));
    

    var nodes=[];
    for(var i = 1 ; i<= rows ;i++){
        nodes.push([i,{color: '#008A00'}]);
    }

    graph.addNodesFrom(nodes);

    for(var i =1  ; i<=rows ;i++){
        for(var j = 1 ; j<=cols ;j++){
            var node = document.getElementById(i+","+j);
            
            if(node!=null){
                
                
                if(node.value!=0){

                        graph.addEdge(i,j);                     
                   
                 }

            }
          
        }
    }

    return graph;

}
var getMatrix=function(){

    var rows=parseInt(localStorage.getItem("rows"));
    var cols=parseInt(localStorage.getItem("cols"));
     
    var m=new Array();
    

    for(var i =0  ; i<rows ;i++){
        m[i]=new Array();
        for(var j = 0 ; j<cols ;j++){
            var a=i+1;
            var b=j+1;
            var node = document.getElementById(a+","+b);
            
            if(node!=null){
                
               m[i][j]=parseInt(node.value);

            }
          
        }
    }
   
    return m;

}
var wharshall = function(){

            var model= document.getElementById("modal-body");
            var html ='';
            html+='<ul class="list-group">';
           
           var graph=fromMatrixToGraph();
           var nodes =graph.nodes();
           var orieante = localStorage.getItem("oriente");
           if(orieante!="1"){
           
                 graph=graph.toDirected();
                
            }
        
    
           for(var i =1  ; i<=nodes.length ;i++){
              var arcs=graph.edges();
              var entre =[];
              var sortie=[];
              for(var j =0  ; j<arcs.length ;j++){
                
                  if(arcs[j][0]==i) sortie.push(arcs[j][1]);
                  if(arcs[j][1]==i) entre.push(arcs[j][0]);
                  
              }

                if(entre.length!=0 && sortie.length!=0){
                    for(var k =0  ; k<entre.length ;k++){
                        for(var j = 0 ; j<sortie.length ;j++){
                              var arc=[entre[k],sortie[j]];
                              var test=false;
                              for(var r =0  ; r<arcs.length ;r++){
                                    if(arcs[r].toString()==arc.toString()){
                                        test=true;
                                        break;
                                    }
                              }
                              if(test==false){
                                  console.log(arc)
                                  html+='<li class="list-group-item">'+arc[0]+'--->'+arc[1]+'</li>';
                                  graph.addEdge(arc[0],arc[1]);
                              }
                     }
                    }
              }

           }
           if(orieante!="1"){          
              graph=graph.toUndirected();         
           }

           html+="</ul>";
           model.innerHTML=html;
             return graph;
       

}



