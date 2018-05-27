
var bellmanford=function(n){
    n=parseInt(n);
    if(graph.neighbors(n).length==0){
        var model= document.getElementById("modal-body");
             var html="";
             html+='<h1>le noeuds choisie n\'est pas connecté ! </h1>';
         
        model.innerHTML=html;

        $("#warshallModel").modal();
        return ;
    }
    L=[];
    P=[];

    var nodes=graph.nodes();
    for (var index = 0; index < nodes.length; index++) {
       
        if(nodes[index]==n){
            L[index]=0
        }else{
            L[index]="non";
        }

        P[index]="N";


        
    }   

    var voisin=graph.neighbors(n);
    var arcs=[];
    for (var index = 0; index < voisin.length; index++) {
        var element = voisin[index];
        if(element!=n)
        arcs.push([n,element]);

    }
    for (var index = 0; index < voisin.length; index++) {
        var element = voisin[index];
        if(element!=n){
            var vs=graph.neighbors(element);
            for (var i = 0; i < vs.length; i++) {
                var elm = vs[i];
                if(element!=elm)
                arcs.push([element,elm]);
        
            }
        }
       
    }
    var m=getMatrix();
    for (var index = 0; index < nodes.length-1; index++) {
        var node = nodes[index];
        for(var i=0; i<arcs.length;i++){
            var arc=arcs[i];
            // exemple [1,2] =>> arc[0]=1 et arc[1]=2
            var ancien=L[arc[1]-1];
            var opt=(L[arc[0]-1]+m[arc[0]-1][arc[1]-1]);
            if(ancien=='non'){
                L[arc[1]-1]=opt;
                P[arc[1]-1]=arc[0];
            }else{
                if(ancien>opt){
                    L[arc[1]-1]=opt;
                    P[arc[1]-1]=arc[0];
                }
            }
            
        }
    }

    var chemin=[];
    var graphes=[];
    for(var i=0;i<graph.nodes().length;i++){
         var node=i+1;
         if(node==n)  continue;
         chemin[i]="("+node+") <-- ";
         var pre=P[i];
         chemin[i]+="("+pre+")";
         while(pre!=n && pre!='N'){
           pre=P[pre-1];
           chemin[i]+="<--"+"("+pre+")";
         }

           chemin[i]+=" : "+L[i];
    }
    var model= document.getElementById("modal-body");
    var html='<ul class="list-group">';
    for(var i=0;i<chemin.length;i++){
        if(chemin[i]!=undefined)
         html+='<li class="list-group-item">'+chemin[i]+'</li>';
    }
    html+="</ul>";
    model.innerHTML=html;
    $("#warshallModel").modal();
   

}
