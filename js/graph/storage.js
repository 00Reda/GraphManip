var file_output=document.getElementById("file-output");

file_output.addEventListener("click",function(){

    var x =getMatrix()   ;

   var json=JSON.stringify(x)

   var projectname = prompt("Donner un nom a votre graph : ");

   var keys = Object.keys(localStorage);
   var i = keys.length;
   var test=false;
   while ( i-- ) {
       if(localStorage.getItem('graph_'+projectname)!=null  ){
           test=true;
           break;
       }
   }
   if(test){
       alert("projet déja exist ");
       return;
   }


   if (projectname == null || projectname == "") {
     alert ("le nom du projet n'est pas valid ! ");
          return ;
   } 

   localStorage.setItem('graph_'+projectname,json);
   localStorage.setItem('0195graph_'+projectname+"0195",localStorage.getItem("oriente"));    
     
   alert("votre a ete sauvegarder sous le nom : "+projectname);
  
   
});

var file_input=document.getElementById("file-input");

file_input.addEventListener("click",function(e){
     
    e.preventDefault();
    var form = document.getElementById("formProject");

    var keys = Object.keys(localStorage);
    var i = keys.length;
    var select=document.getElementById('project');
    var html ='';
    while ( i-- ) {
        if(keys[i].indexOf("graph_")!=-1 && keys[i].indexOf("0195")==-1 ){
            var val=keys[i].substr(keys[i].indexOf("_")+1,keys[i].length-1);
            html+='<option value="'+keys[i]+'">'+val+'</option>'; 
        }
        
        
    }
   
    select.innerHTML=html;
     
    $("#LoadProjet").modal();
   
});

        var loadform=document.getElementById("formProject");

        loadform.addEventListener("submit" , function(e){

        e.preventDefault();

        var select=document.getElementById('project');
        var n = select.options[select.selectedIndex].value;

        var json = localStorage.getItem(n);

        var matrix=JSON.parse(json);

        var form = document.getElementById("form");
     
       if(form==null) return ;
      
        var rows=matrix.length;
        var cols=matrix.length;

        debugger
     
      var html ="";
      for( i =0 ; i<parseInt(rows) ;i++){
          var row= i+1;
          html+="<div class='row-x' id='"+row*10+"'  style='width:"+cols*80+"px'>";
          
          for( j =0 ; j<parseInt(cols) ;j++){
              var col = j+1;
              html+="<div class='col-x'>";
              html+="<input value='"+matrix[i][j]+"' type='number' class='form-control' id='"+(row+","+col)+"'>";
              html+="</div>" ;
              if(j!==parseInt(cols)-1)
                 html+='<span style="font-size: 30px;float:left">,</span>';
          }
         
          html+="</div>";

      }
      
      localStorage.setItem("cols",cols);
      localStorage.setItem("rows",rows);
      localStorage.setItem("oriente",localStorage.getItem("0195"+n+"0195"));
      
      html+='<br><div class="form-group"><button type="submit" class="btn btn-primary" id="btn">Visualisation</button></div>';

      form.innerHTML=html;
      $("#LoadProjet").modal("hide");
      document.getElementById("btn").click();
     });
