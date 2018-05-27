var FillInput=function(algo){
    var ActiveArr=document.getElementById("ActiveArr");
    ActiveArr.style.display='none';
    var select=document.getElementById('node');
    var selectArr=document.getElementById('nodeArr');
    var html ='';
    var rows=localStorage.getItem("rows");
    for(var i=1;i<=rows;i++)
    {
        html+='<option value="'+i+'">'+i+'</option>';
    }
    select.innerHTML=html;
    selectArr.innerHTML=html;                                
    localStorage.setItem("algo",algo);
    
    if(algo=="fordFulkerson"){
       
        ActiveArr.style.display='block';
    }

    $("#choixModel").modal();

}
/**
 *  fonction de test sur notre graph : si c est un reseau de transport .
 */
function graphVerif(g,s,p){

    if(g.selfloopEdges().length!=0){
        return "votre graph contient des boucles !!";
    }else if(localStorage.getItem("oriente")!="1"){
        return "votre graph n'est pas oriente !!";
    }else if(g.edges(p).length!=0){
        return "votre noeud d'arrive n'est pas valid (contient des sorties) !!";
    }else if(g.predecessors(s).length!=0){
        return "votre noeud de depart n'est pas valid (ce n'est pas une source) !!";
    }else if(jsnx.hasPath(graph,{source: s, target:p})==false){
        return " il y a pas de chemin entre la source et l'arreve !!";
    }else return null;

}

var DFSBtn=document.getElementById("DFS");

if(DFSBtn!=null){

    DFSBtn.addEventListener("click",function(e){
   
  
                e.preventDefault();
                
                FillInput("dfs");
               
  
    });
  
  
  }

  var BFSBtn=document.getElementById("BFS");
   
if(BFSBtn!=null){

    BFSBtn.addEventListener("click",function(e){
   
  
                e.preventDefault();
                
                FillInput("bfs");

  
    });
  
  
  }

  var DijkstraBtn=document.getElementById("Dijkstra");
  
  if(DijkstraBtn!=null){

    DijkstraBtn.addEventListener("click",function(e){
                e.preventDefault();
                FillInput("dijkstra");
    });
  
  
  }

  var Bellmanford=document.getElementById("Bellmanford");

if(Bellmanford!=null){

    Bellmanford.addEventListener("click",function(e){
                e.preventDefault();
                FillInput("Bellmanford");
    });
  
  
  }
/**
 * algo prim
 */
  var prim=document.getElementById("prim");

  if(prim!=null){
  
    prim.addEventListener("click",function(e){
     
    
                  e.preventDefault();
                  FillInput("prim");
                 
      });
    
    }

    /**
     *  algo fordFulkerson 
     * 
     */

    var ford=document.getElementById("fordFulkerson");

    if(ford!=null){
    
      ford.addEventListener("click",function(e){
       
      
                    e.preventDefault();
                    FillInput("fordFulkerson");
                   
        });
      
      }


/**
 *  switcher sur tout les algos
 */
  var form=document.getElementById("formNode");

  form.addEventListener("submit" , function(e){

    e.preventDefault();

    var select=document.getElementById('node');
    var n = select.options[select.selectedIndex].value;

    
    n=parseInt(n);

    var algo =localStorage.getItem("algo");

     if(algo=='bfs'){
             bfs(n);
     }else if(algo=="dfs"){
             dfs(n);
     }
     else if(algo=='dijkstra'){
        dijkstra(n);
     }
     else if(algo=='Bellmanford'){
        bellmanford(n);
     }else if(algo=='prim'){
        Prim(n);
     }else if(algo=='fordFulkerson'){
         /**
          *  avant d'appeller l'algo il faut teste le graph
          */
        var selectArr=document.getElementById('nodeArr');
        var p = selectArr.options[selectArr.selectedIndex].value;
        p=parseInt(p);
       
        var test=graphVerif(fromMatrixToGraph(),n,p);

        if(test==null){
            var flow=window.fordFulkerson(getMatrix(),n-1,p-1);
            var model= document.getElementById("modal-body");
            var html='<ul class="list-group">';
             html+='<li class="list-group-item"> le flot max du graph : ' +flow+'</li>';
            html+="</ul>";
            model.innerHTML=html;
            $("#warshallModel").modal();
        
        }else{
            alert(test);
        }
        


        var ActiveArr=document.getElementById("ActiveArr");
        ActiveArr.style.display='none';
     }

     $("#choixModel").modal("hide");
   

})

  
