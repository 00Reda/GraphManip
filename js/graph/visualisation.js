

window.addEventListener("DOMContentLoaded" , function(){

      var form = this.document.getElementById("form");
      this.console.log(form);
      if(form==null) return ;
      
      var rows=localStorage.getItem("rows");
      var cols=localStorage.getItem("cols");

      var index  = window.location.href;

       if(rows==null || cols==null)  window.location.href=index.substring(0,index.indexOf("visualisation"))+"index.html";


      var html ="";
      for( i =0 ; i<parseInt(rows) ;i++){
          var row= i+1;
          html+="<div class='row-x' id='"+row*10+"'  style='width:"+cols*80+"px'>";
          
          for( j =0 ; j<parseInt(cols) ;j++){
              var col = j+1;
              html+="<div class='col-x'>";
              html+="<input value='1' type='number' class='form-control' id='"+(row+","+col)+"'>";
              html+="</div>" ;
              if(j!==parseInt(cols)-1)
                 html+='<span style="font-size: 30px;float:left">,</span>';
          }
         
          html+="</div>";

      }
      
      html+='<br><div class="form-group"><button type="submit" class="btn btn-primary" id="btn">Visualisation</button></div>';

      form.innerHTML=html;
});




                      
                       
                