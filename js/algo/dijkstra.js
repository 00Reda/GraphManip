var MSG=function(){
    var model= document.getElementById("modal-body");
    var html ='';
         html+='<h1>le noeuds choisie n\'est pas connecté ! </h1>';
     
    model.innerHTML=html;
    
    $("#warshallModel").modal();
}
var GetMin=function(L,T,n){
    
    var min=0;
    
    for(var i=min+1;i<L.length;i++){
        var a=i;
        if(L[min]=='non') L[min]=99999;
        
        if(L[min]>L[a] || L[min]==0 || L[min]=='non'){
            var traite=false;
            for(var j=0;j<T.length;j++){
               if(T[j]==(a+1)) traite=true;
            }
            if(traite==false) min=a;
        }
       
    }

    return (min+1);
}

var dijkstra=function(n){
   
    var L=[];
    var P=[];
    var T=[];
     // init 
     n=parseInt(n);
     n=parseInt(n);

    if(graph.neighbors(n).length==0){
        MSG();
        return ;
    }
     var m=getMatrix();
     var ligne=m[parseInt(n)-1];
     for(var i=0;i<ligne.length;i++){
         if((i+1)==parseInt(n)){
             L[i]=0;
             P[i]=0;
         }else if(ligne[i]!=0){
            L[i]=ligne[i];
            P[i]=parseInt(n);
         }else{
            L[i]="non";
            P[i]="N";
         }
     }
     T[n-1]=n;

     while(T.length!=graph.nodes().length){
        var min = GetMin(L,T,n);
        T.push(min);
        var voisin = graph.neighbors(min);
        if(voisin.length==0) {
            break;
        }
        for(var i=0;i<voisin.length;i++){
            var current=voisin[i]-1;
            var ancien=L[current];
            var optim=L[min-1]+m[min-1][current];
            if(ancien=="non"){
                L[current]=optim;
            }else{
                L[current]=Math.min(L[current],optim);
            }

            if(ancien!=L[current]){
                P[voisin[i]-1]=min;
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
          if(pre=='N')  chemin[i]+="(inaccesible)";
          else chemin[i]+="("+pre+")";
          while(pre!=n && pre!=0 && pre!='N'){
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