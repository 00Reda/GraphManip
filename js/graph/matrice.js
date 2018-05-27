

var form = document.getElementById("form");


form.addEventListener("submit" , function(e){

    e.preventDefault();

    var inputs = form.getElementsByTagName("input");

    var rows=inputs[0].value;
    var cols=inputs[0].value;
    if(inputs[1].checked){
        var orientation=1
    }else{
        var orientation=0;
    }
  
    if(rows=="" || cols=="") {
        alert("donne les information de votre graphe !"); 
        return ;
    }

    localStorage.setItem("rows",rows);
    localStorage.setItem("cols",cols);
    localStorage.setItem('oriente',orientation);
    var index =window.location.href;
    
    window.location=index.substring(0,index.indexOf("index"))+"visualisation.html";
     
     

   

})